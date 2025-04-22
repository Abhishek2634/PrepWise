// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjJGT-ogfU8AKNxJvj5gLoINoiq9ksGos",
  authDomain: "prepw-64a77.firebaseapp.com",
  projectId: "prepw-64a77",
  storageBucket: "prepw-64a77.firebasestorage.app",
  messagingSenderId: "926009625835",
  appId: "1:926009625835:web:082863fac3a7d1c2d682ae",
  measurementId: "G-YEHNN6G2SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);