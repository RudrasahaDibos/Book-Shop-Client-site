// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkB_2A6UXJNyJKRsRdt1hIxgx9BCCKSjw",
  authDomain: "bookshop-client.firebaseapp.com",
  projectId: "bookshop-client",
  storageBucket: "bookshop-client.firebasestorage.app",
  messagingSenderId: "411068528204",
  appId: "1:411068528204:web:06eb27a4039ee02125e6e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
