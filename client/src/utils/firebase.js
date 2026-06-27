
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-98fb8.firebaseapp.com",
  projectId: "interviewiq-98fb8",
  storageBucket: "interviewiq-98fb8.firebasestorage.app",
  messagingSenderId: "1063159930419",
  appId: "1:1063159930419:web:dc3e33e0f4947deaf4cd46",
  measurementId: "G-7MVYEB92PS"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}