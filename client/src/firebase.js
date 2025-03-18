// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyT9uG7JgGm7-3BosAVm_FhfIBpEEcRDo",
  authDomain: "shilp25.firebaseapp.com",
  projectId: "shilp25",
  storageBucket: "shilp25.firebasestorage.app",
  messagingSenderId: "548967400537",
  appId: "1:548967400537:web:73f75812ad30c877e51d48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { app, auth, provider, db };
