// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7g915-x6Aaubq8Zo1cbrI98brO05PQmY",
  authDomain: "api-rendering-923c9.firebaseapp.com",
  projectId: "api-rendering-923c9",
  storageBucket: "api-rendering-923c9.appspot.com",
  messagingSenderId: "398406407699",
  appId: "1:398406407699:web:d6ed7ccba1d6b4d3abd1e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {app, auth, db};

