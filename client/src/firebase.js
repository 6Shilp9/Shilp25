// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmu8HyGZY1bWury4t1yCNL_1M8HMdWTiw",
  authDomain: "shilp-25.firebaseapp.com",
  projectId: "shilp-25",
  storageBucket: "shilp-25.firebasestorage.app",
  messagingSenderId: "1067390759528",
  appId: "1:1067390759528:web:ac80ee7b9ba9a3bfb741dd",
  measurementId: "G-XBTE40Y5RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { app, auth, provider, db };
