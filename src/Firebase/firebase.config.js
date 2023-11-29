// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCumoWPXTw04QvCs1ct1Q4KKKWBpy3az5g",
    authDomain: "booksphare.firebaseapp.com",
    projectId: "booksphare",
    storageBucket: "booksphare.appspot.com",
    messagingSenderId: "84395380932",
    appId: "1:84395380932:web:11e5e53c760cdf7564b991"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);
export default auth;