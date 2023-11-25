import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, setPersistence, browserSessionPersistence} from 'firebase/auth';
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
setPersistence(auth, browserSessionPersistence)
.then(()=> {
  console.log("setting session persistence...");
})
.catch ((error) => {
  console.log("error", error);
});

function authListeners() {
  console.log("loading..");
  $(document).on("click", "#sign-up-btn", (e) => {
    e.preventDefault(); //prevents reload
    console.log("create");
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let email = $("#provideEmail").val();
    let pass = $("#createPassword").val();
    console.log("Account created for: " + firstName + " " + lastName)

    createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      
      return updateProfile(user, {
          displayName: firstName
      });
      // ...
    }).then(() => {
      displayUserName();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error Message: " + errorMessage);
      // ..
    });
  });

  function displayUserName() {
    console.log("displaying name...");
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
          const userName = user.displayName;
          console.log("current user: " + userName);
  
          //display username on page
          const welcomeUsers = document.querySelectorAll(".welcome");
          welcomeUsers.forEach((welcomeUser) => {
            welcomeUser.innerText = "Welcome, " + userName;
          });
  
          localStorage.setItem("userName", userName);
        
         // $(".welcome").text("Welcome," + userName);
          const uid = user.uid;
            // ...
          } else {
            // User is signed out
            console.log("logged out.");
            // ...
          }
        })
  }

  document.addEventListener("DOMContentLoaded", () => {
    const getUser = localStorage.getItem("userName");
    const welcomeUsers = document.querySelectorAll(".welcome");
          welcomeUsers.forEach((welcomeUser) => {
            welcomeUser.innerText = "Welcome, " + getUser;
          });
      displayUserName();
  });
  

  $(document).on("click", "#loginBtn", (e) => {
    e.preventDefault(); //prevents reload
    console.log("logging in..");
    let email = $("#loginEmail").val();
    let pass = $("#loginPassword").val();
    console.log("login success!");

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed In
        const user = userCredential.user;
        console.log(user);
        const userName = user.displayName;
        //console.log("user's name: " + userName);
        //$(".welcome").text("Welcome," + userName);
        displayUserName();
    }) 
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error Message: " + errorMessage);
      // ..
    });
  });
    
}



$(document).ready(function () {
    authListeners();
});