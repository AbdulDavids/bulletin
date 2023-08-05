// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8oDcmAz1I2bb7i_SRCxlBvXvS2KQRjsc",
  authDomain: "twitter-acb56.firebaseapp.com",
  projectId: "twitter-acb56",
  // Add other Firebase settings here
};


const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export default firebaseApp;
