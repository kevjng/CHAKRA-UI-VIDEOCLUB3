// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9YU2Wb1U_iMrZ7eLTD0OZHDpCNz7iKwY",
    authDomain: "videoclub3-d1e1d.firebaseapp.com",
    projectId: "videoclub3-d1e1d",
    storageBucket: "videoclub3-d1e1d.appspot.com",
    messagingSenderId: "811230377244",
    appId: "1:811230377244:web:ef7a571bbb2cdc550136d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db