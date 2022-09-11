// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWFgBT9Skk-GmL-QZ3eHdTJfHj0LK7hzo",
  authDomain: "netflix-project-203aa.firebaseapp.com",
  projectId: "netflix-project-203aa",
  storageBucket: "netflix-project-203aa.appspot.com",
  messagingSenderId: "187738021860",
  appId: "1:187738021860:web:938ed6eff8d3b87b32b1f1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
