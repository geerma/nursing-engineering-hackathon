// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdr01G7ngSNmOyOT9BEU9um45-dv9LCsg",
  authDomain: "nursing-engineering-hackathon.firebaseapp.com",
  projectId: "nursing-engineering-hackathon",
  storageBucket: "nursing-engineering-hackathon.appspot.com",
  messagingSenderId: "165627524772",
  appId: "1:165627524772:web:012270944b0ebfef8dd831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();
export const db = getFirestore(app);