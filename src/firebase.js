// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyi-b1h55pO_1fmtR2Str1SK_XA-nIQCE",
  authDomain: "chatting-46c44.firebaseapp.com",
  projectId: "chatting-46c44",
  storageBucket: "chatting-46c44.appspot.com",
  messagingSenderId: "848603882329",
  appId: "1:848603882329:web:44ebdb9bb53e098378a248"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()