import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAuIxicMLsB0bLLf4MSttfBSvShHl7B1bs",
    authDomain: "skatesphere-5d685.firebaseapp.com",
    databaseURL: "https://skatesphere-5d685-default-rtdb.firebaseio.com",
    projectId: "skatesphere-5d685",
    storageBucket: "skatesphere-5d685.firebasestorage.app",
    messagingSenderId: "555420402048",
    appId: "1:555420402048:web:3d23a482d0bf1808884165"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);