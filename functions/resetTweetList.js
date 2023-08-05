// Import the Firebase Admin SDK
const admin = require('firebase-admin');

// Replace the 'serviceAccountKey' with your Firebase Admin SDK credentials
const serviceAccountKey = {
  // Your service account key JSON
  "type": "service_account",
  "project_id": "twitter-acb56",
  "private_key_id": "df1f76b88185fae8c5a2416376e815c428e5ee32",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDZ2ZgxqwwJjmfj\nKMIT+MtHss/Tddu0vcE0Zv410VETvdTYT3SzzoJCOjfCIBOgm90jhZwRv0PTMxdt\nWArgpY3Ier/icJtvsNLJQs3UWBNXsvw7CyqnrNQhRN8RfYFmAAuFixzvhpLh7ySG\nxA/4GKq0/Evuqi1aqgzUV+/TYwAfcBLxZdnRYl+FKj891K06TMvu0aP3UrYUo6a8\nNWWuDqHepG0iUJ2AMlm57/ndIbQ4UZolskcuYAdB2VM2M3lLxrtmujjQTmBLakHG\n79i5ntp9VRDz70eaPQqh/d9v91rLFQcfFZaAgDqLCrEBszv4NuXpgFbNYCCGxEqL\njzdotNlNAgMBAAECggEAOWgjuQLv+xyxt6Sn8Adh2hT+uySVrv1KCnsRhjEQgnlF\nu3LEuBU1MiqRQvCc+3fXQGMXC34xa1hNVh0bULOPt0LRieROsZIRGcQm5UwIXNXn\nrc91gBYFGHdDqSI/lRdx8dEE4QG/dxZDs9e6tZAae/L4N35U0U16cAJ0SmoOQDoV\n7PyRUfABsT5W6WN8+KFmb5l7UtzVGAt9e59Rv0LlWSXqpaJlQ/HZ6dJts0HUND0a\nFhV5qqvXe51FCo6y4Nq7OEI+iY3PS67Z5RNE/gx+8EFAm5hJys+mir2Fs2FB3do1\nLHg3CPbw6/yq/P2o1DFQU1DGKTCkWGUx4M8S1zcR6QKBgQDtFW+/qKg01wCmOG5d\nCALh/pCIEc1sI8g3euB+740eoZU1GX5T83w94SrrVaUpFxgtwbF7Qq7JUgSOrJj2\nURwbl9TwS6UbSatVUB1f1rSbf20wybsqzO8m7BURcsusX+8BSp8cp0ziQLH/xIHl\n4XQwDJ7oK0IAwgwVhOVDwRd5PwKBgQDrO0xPfHWwKUj9y2eVLsjvOv6+60yqA1kd\nQ+29aG6HmI9xu9fJy+5wlQWTQzeIo3F7DFgUlTC4iMwhe5Wg1xEF7Tt0ZgBUXxJb\nIv5RnU/cUPGOrtR7JsHCO8sXjxPyBsNul3VyF9g2XFkfYcRqqn0IY+Ax257befyg\nu5WHxAwecwKBgQDHOdxOEkxHGuVQyNr1EmZZwrFxpoQY+3ikJn3ALU1JED9x/5pI\nsbMVzMFkQPQpM17+FGYwTjjStDlgK2nekworpcsqomZ8J8vyRQBqKOJcSRhYhyzh\nKpVM/9Y0c2Lz1yngy/Qo/+17syHg7CC8LFiWiASA1NkCCg5dhu+hoAE5wQKBgF8W\nbVaEPR6k0bimDI0liFwMQQX0H91p1RAbcXLrUCLH7NRQ1n3gTdZ8pvBMb5pwV2Mi\nLkjDthoiUkIGrwmBZoQ6zZnT0bZJaCYnEx7ytGGe5saCranKlPBrM0GmuK1RRpbh\n6rvgH6p50hz5bGih2kEV/n6pBKI7wX9H1L445Z05AoGAepgt1m2UslUrPPYzGJGz\nMivJpw+Q/gZzVKKU4oWjkCd1ApIgGtr1Enhp20m1zDFfr1XO/p7iZ3jFgkptyQlq\nqaWxjYlmepwsA1nzPEmu3k4DHKruSVC7o1kKnM2eeur/VQ6JSPNSjHaV73K+RsVu\nwoqhmfw5nqiTeSdGOVPLlQA=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-9py6w@twitter-acb56.iam.gserviceaccount.com",
  "client_id": "116377585465005651057",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9py6w%40twitter-acb56.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

// Initialize the Firebase Admin SDK with appropriate credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

addEventListener('scheduled', (event) => {
  event.waitUntil(deleteFirestoreDatabase());
});

async function deleteFirestoreDatabase() {
  try {
    // Replace 'YOUR_FIRESTORE_COLLECTION' with the name of your Firestore collection to delete
    const collectionRef = admin.firestore().collection('tweets');

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

  let batch = admin.firestore().batch();
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
