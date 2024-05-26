// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-jZr2Q4jOsesgjDt011Gk6yCA7Up60xY",
  authDomain: "swiggy-clone-6ce70.firebaseapp.com",
  projectId: "swiggy-clone-6ce70",
  storageBucket: "swiggy-clone-6ce70.appspot.com",
  messagingSenderId: "595346561907",
  appId: "1:595346561907:web:342d45d252709af9b8c306",
  measurementId: "G-E06HPQQK7B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
