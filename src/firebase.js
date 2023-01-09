// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0toGnSJQvRZfR0pHdJdAYrh2x8PK-RIA",
    authDomain: "mobile-tools-7c92d.firebaseapp.com",
    projectId: "mobile-tools-7c92d",
    storageBucket: "mobile-tools-7c92d.appspot.com",
    messagingSenderId: "808940055458",
    appId: "1:808940055458:web:b82af6b519a273761b20fb",
    measurementId: "G-FX93Z6RZRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);