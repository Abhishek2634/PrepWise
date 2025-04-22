import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.CLIENT_API_KEY,
  authDomain: "prepw-64a77.firebaseapp.com",
  projectId: "prepw-64a77",
  storageBucket: "prepw-64a77.firebasestorage.app",
  messagingSenderId: "926009625835",
  appId: "1:926009625835:web:082863fac3a7d1c2d682ae",
  measurementId: "G-YEHNN6G2SZ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

