// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "course-b8883.firebaseapp.com",
  projectId: "course-b8883",
  storageBucket: "course-b8883.firebasestorage.app",
  messagingSenderId: "834472535920",
  appId: "1:834472535920:web:aa740c8a1745086f3851b5",
  measurementId: "G-RGVR91PCN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getFirestore(app);

export { database };