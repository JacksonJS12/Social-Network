import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBVlY2uYIaaDiXQxf5qcpP6BwnTQ5xDA0",
  authDomain: "cat-blog-firebase.firebaseapp.com",
  projectId: "cat-blog-firebase",
  storageBucket: "cat-blog-firebase.appspot.com",
  messagingSenderId: "824574380400",
  appId: "1:824574380400:web:259fb0ef6df9bb100be7b5",
  measurementId: "G-477LLDBYFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();