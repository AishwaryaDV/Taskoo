// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDddnCO-Xwam1WsaC1fJmITNt4wzR1CuCw",
  authDomain: "taskoo-f4645.firebaseapp.com",
  projectId: "taskoo-f4645",
  storageBucket: "taskoo-f4645.appspot.com",
  messagingSenderId: "812025241209",
  appId: "1:812025241209:web:0ed0a10b170a5d181abea8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);