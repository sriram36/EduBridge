// firebase/config.ts
"use client";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD2IhmCjJO7zg8rJHTtf4vIaN32PJPejtg",
    authDomain: "edubridge-96ee0.firebaseapp.com",
    projectId: "edubridge-96ee0",
    storageBucket: "edubridge-96ee0.firebasestorage.app",
    messagingSenderId: "621015083547",
    appId: "1:621015083547:web:a660321e78f957952966be"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const loginAnonymously = () => signInAnonymously(auth);
