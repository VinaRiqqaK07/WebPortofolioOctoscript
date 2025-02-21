// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf5cAqd4iv7sR5HSGuc_XRMpbtZs38od0",
  authDomain: "website-porto-13036.firebaseapp.com",
  projectId: "website-porto-13036",
  storageBucket: "website-porto-13036.firebasestorage.app",
  messagingSenderId: "617242731254",
  appId: "1:617242731254:web:b5aad17ef253652f4302d7",
  measurementId: "G-XQD92HN3RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

//EXPORT
export { app, auth, db };