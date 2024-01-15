// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEoq3XU1vl3DKKa3G4YvnvLgHvx-SDSMU",
  authDomain: "mangashio.firebaseapp.com",
  projectId: "mangashio",
  storageBucket: "mangashio.appspot.com",
  messagingSenderId: "34510111560",
  appId: "1:34510111560:web:ce078e70f3c20198a7297d"
};

// Initialize Firebase
export const Firebase_App = initializeApp(firebaseConfig);
export const Firebase_Auth = getAuth(Firebase_App);
export { signInWithEmailAndPassword }; // Add this line to export signInWithEmailAndPassword
