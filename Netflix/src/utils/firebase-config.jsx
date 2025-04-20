
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBJnoCUhkF-pHrgKuxAt1Q63l_41k5na2I",
  authDomain: "react-netflix-34eec.firebaseapp.com",
  projectId: "react-netflix-34eec",
  storageBucket: "react-netflix-34eec.firebasestorage.app",
  messagingSenderId: "343547838701",
  appId: "1:343547838701:web:c0e5eb55a7b10913ae0ce4",
  measurementId: "G-NFB7W0CLVN"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
