import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        updateProfile, 
        onAuthStateChanged} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE_SY1sAWPg9D-z-IQ_Se-_Q3hG_WnXq4",
  authDomain: "jungle-cook2.firebaseapp.com",
  projectId: "jungle-cook2",
  storageBucket: "jungle-cook2.appspot.com",
  messagingSenderId: "717664937276",
  appId: "1:717664937276:web:c97ef96a9f043cb728aa39",
  measurementId: "G-VR53H08P6N"
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
function displayUserName(user) {
  if (!user) {
    console.log("user does not exist.");
  } else {
    const userName = user.displayName;
    console.log("display the name:" + userName);
    localStorage.setItem("userName", userName);
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
              displayUserName();
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
      console.log("Login success!");

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