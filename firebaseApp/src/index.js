import { initializeApp } from "firebase/app";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBSYoCX4MeIf9YH3XCQnLkmRRMoussQ2zU",
  authDomain: "newm-n315-aw.firebaseapp.com",
  projectId: "newm-n315-aw",
  storageBucket: "newm-n315-aw.appspot.com",
  messagingSenderId: "1067804397638",
  appId: "1:1067804397638:web:cdcbcdc196a6f41228ba47",
  measurementId: "G-73T5M9G3NV"
};

//initalize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




function initListeners() {
    $("#createAcctBtn").on("click", (e) => {
      e.preventDefault(); //prevents reload
      //console.log("create");
      let fName = $("#fName").val();
      let email = $("#emailC").val();
      let pw = $("#pwC").val();

      createUserWithEmailAndPassword(auth, email, pw)
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

    $("#loginBtn").on("click", (e) => {
      e.preventDefault(); //prevents reload
      //console.log("login");
      let email = $("#email").val();
      let pw = $("#pw").val();
      console.log("email: " + email)

      signInWithEmailAndPassword(auth, email, pw)
      .then((userCredential) => {
        // Signed In
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

   $("#loginOutBtn").on("click", (e) => {
    signOut(auth)
      .then(() => {
      console.log("signed out");
      })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("error message" + errorMessage);
    });
   });
  }

$(document).ready(function () {
    initListeners();
});