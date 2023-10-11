// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsso_xWNwnMzIyRSCIXtkS0pqLdh15a0I",
  authDomain: "mychat-67c1c.firebaseapp.com",
  projectId: "mychat-67c1c",
  storageBucket: "mychat-67c1c.appspot.com",
  messagingSenderId: "664579194164",
  appId: "1:664579194164:web:bf1c11d4521a6dccef3961",
  measurementId: "G-DFEZZGE0RY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
