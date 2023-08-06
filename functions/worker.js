const firebase = require('firebase/app');
require('firebase/firestore');

// Replace with your Firebase config object from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyD8oDcmAz1I2bb7i_SRCxlBvXvS2KQRjsc",
  authDomain: "twitter-acb56.firebaseapp.com",
  projectId: "twitter-acb56"
  // Add other config properties here...
};

// Initialize Firebase with the config object
firebase.initializeApp(firebaseConfig);

addEventListener('scheduled', (event) => {
  event.waitUntil(deleteFirestoreDatabase());
});

async function deleteFirestoreDatabase() {
  try {
    // Replace 'YOUR_FIRESTORE_COLLECTION' with the name of your Firestore collection to delete
    const collectionRef = firebase.firestore().collection('YOUR_FIRESTORE_COLLECTION');

    // Delete all documents in the collection
    await deleteCollection(collectionRef);

    return new Response('Firestore database deleted successfully.', { status: 200 });
  } catch (error) {
    console.error('Error deleting Firestore database:', error);
    return new Response('Error deleting Firestore database.', { status: 500 });
  }
}

// Helper function to delete a Firestore collection
async function deleteCollection(collectionRef) {
  const querySnapshot = await collectionRef.get();

  // Delete documents in batches to avoid exceeding the Firestore write limits
  const batchSize = 500;
  const numDocs = querySnapshot.size;

  if (numDocs === 0) {
    return;
  }

  let batch = firebase.firestore().batch();
  let deleted = 0;

  querySnapshot.forEach((doc) => {
    batch.delete(doc.ref);
    deleted++;

    if (deleted % batchSize === 0 || deleted === numDocs) {
      return batch.commit();
    }
  });

  return null;
}
