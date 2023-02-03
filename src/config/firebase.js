// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyASqTSsXHEvD-zzYCJyE4ivsjtFpZtr0ww",
  authDomain: "expense-tracker-b38a1.firebaseapp.com",
  projectId: "expense-tracker-b38a1",
  storageBucket: "expense-tracker-b38a1.appspot.com",
  messagingSenderId: "334450037117",
  appId: "1:334450037117:web:cb84a22dfdca6f32e93c14",
  measurementId: "G-NC2BDS093W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)

export {auth,db }
