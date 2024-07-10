// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCTPMDLWcDAJXUW-5fONn5rgI3Da__fij8",
//   authDomain: "weather-app-bf0d5.firebaseapp.com",
//   projectId: "weather-app-bf0d5",
//   storageBucket: "weather-app-bf0d5.appspot.com",
//   messagingSenderId: "104250236468",
//   appId: "1:104250236468:web:2d3279da4b83216dd53461",
//   measurementId: "G-8LN7PPS7MD"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider, signInWithPopup };



// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTPMDLWcDAJXUW-5fONn5rgI3Da__fij8",
  authDomain: "weather-app-bf0d5.firebaseapp.com",
  projectId: "weather-app-bf0d5",
  storageBucket: "weather-app-bf0d5.appspot.com",
  messagingSenderId: "104250236468",
  appId: "1:104250236468:web:2d3279da4b83216dd53461",
  measurementId: "G-8LN7PPS7MD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
