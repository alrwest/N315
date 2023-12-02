// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMEFQZwejR3sxzMYK0S9nbAYckYPndqew",
  authDomain: "final-n315.firebaseapp.com",
  projectId: "final-n315",
  storageBucket: "final-n315.appspot.com",
  messagingSenderId: "85779781913",
  appId: "1:85779781913:web:a6d3d239e6e024b693cd88",
  measurementId: "G-C9582XTTCY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
