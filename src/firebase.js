// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuXwrH8nEUZXga_SE1JQv0bHNq6uTgUws",
  authDomain: "chat-b177f.firebaseapp.com",
  projectId: "chat-b177f",
  storageBucket: "chat-b177f.appspot.com",
  messagingSenderId: "966195486199",
  appId: "1:966195486199:web:fd3493362b07244165a2f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()