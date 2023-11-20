// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWwA7JZvUQPaGDByQ8RAgGIxreRluBJy0",
  authDomain: "junglecook-77566.firebaseapp.com",
  projectId: "junglecook-77566",
  storageBucket: "junglecook-77566.appspot.com",
  messagingSenderId: "461456499214",
  appId: "1:461456499214:web:664ab1b6486487fbcdd25f",
  measurementId: "G-7CQ2GCWCLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function initListeners() {
    let firstName = $("#firstName").val();
    let email = $("#email").val();
    let password = $("#password").val();


  $("#signUpBtn").on("click", (e) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error Message: " + errorMessage);
      // ..
    });
  });

  //login a current user
  $("#loginInBtn").on("click", (e) => {
    e.preventDefault(); //prevents the reloading of page
    let email = $("#email-signIn").val();
    let password = $("#password-signIn").val();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }); 
}

  $(document).ready(function () {
    initListeners();
});