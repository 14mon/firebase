// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyCHsPY_9e1o4O2Uu3AXVEUTKXD_wdEHYtQ",
  authDomain: "biodent-myanmar.firebaseapp.com",
  projectId: "biodent-myanmar",
  storageBucket: "biodent-myanmar.appspot.com",
  messagingSenderId: "29662306827	", 
  appId: "1:29662306827:android:e3f75920b9b36dd05a5d0e" 
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);