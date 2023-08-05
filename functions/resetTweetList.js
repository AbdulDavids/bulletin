const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp({
  credential: admin.credential.cert('twitter_2\functions\twitter-acb56-firebase-adminsdk-9py6w-df1f76b881.json'),
  databaseURL: 'https://twitter-acb56.firebaseio.com',
});

exports.deleteCollectionDaily = functions.pubsub
  .schedule('every day 00:00')
  .timeZone('SAST')
  .onRun(async (context) => {
    const db = admin.firestore();
    const collectionRef = db.collection('tweets'); // Replace 'your-collection' with the name of your collection to delete.

    const batchSize = 50;
    const query = collectionRef.orderBy('__name__').limit(batchSize);

    return new Promise((resolve, reject) => {
      deleteQueryBatch(db, query, batchSize, resolve, reject);
    });
  });

function deleteQueryBatch(db, query, batchSize, resolve, reject) {
  query
    .get()
    .then((snapshot) => {
      // When there are no documents left, we are done
      if (snapshot.size === 0) {
        return 0;
      }

      // Delete documents in a batch
      const batch = db.batch();
      snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
      });

      return batch.commit().then(() => {
        return snapshot.size;
      });
    })
    .then((numDeleted) => {
      if (numDeleted === 0) {
        resolve();
        return;
      }

      // Recurse on the next process tick, to avoid
      // exploding the stack.
      process.nextTick(() => {
        deleteQueryBatch(db, query, batchSize, resolve, reject);
      });
    })
    .catch(reject);
}
