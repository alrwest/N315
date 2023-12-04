// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  updateProfile,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
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

//keeping login session info until current session or tab is closed
export function userAuthStateChanged() {
  onAuthStateChanged(auth, (user) => {
    console.log("user: ", user);
    if (user) {
      const userName = user.displayName;
      console.log("username:" + userName);
      displayUserName(userName);
    } else {
      console.log("user is not logged in.");
    }
  });
}

//display a user's name, if logged in
function displayUserName(userName) {
  if (!userName) {
    console.log("user does not exist.");
  } else {
    const userName = user.displayName;
    console.log("display the name:" + userName);
    $(".welcome").text(`Welcome, ${userName}`);
  }
}

function authListeners() {
  console.log("Listening..");

  $(document).on("click", "#sign-up-btn", (e) => {
    e.preventDefault(); // Prevent reload
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let email = $("#provideEmail").val();
    let pass = $("#createPassword").val();
    console.log("Account created for: " + firstName + " " + lastName);

    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, { displayName: firstName });
      })
      .then(() => {
        displayUserName(userName);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error Message: " + errorMessage);
      });
  });

  $(document).on("click", "#loginBtn", (e) => {
    e.preventDefault(); // Prevent reload
    console.log("Logging in..");
    let email = $("#loginEmail").val();
    let pass = $("#loginPassword").val();
    console.log("credientials acquired");

    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        // Signed In
        console.log("Current user:" + auth.currentUser);
        displayUserName(auth.currentUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error Message: " + errorMessage);
      });
  });
}

$(document).ready(function () {
  userAuthStateChanged();
  authListeners();
});
