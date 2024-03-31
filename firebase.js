import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBFMtWu1nrSpHjQSiq3NMPMOz1ltkbjS8",
  authDomain: "st-web-assignment.firebaseapp.com",
  projectId: "st-web-assignment",
  storageBucket: "st-web-assignment.appspot.com",
  messagingSenderId: "206592207750",
  appId: "1:206592207750:web:43a5fe7ed3b8308f069a07",
  measurementId: "G-M0E6SV6FPG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  GoogleAuthProvider,
  googleProvider,
  signInWithPopup, set,
  ref

};
