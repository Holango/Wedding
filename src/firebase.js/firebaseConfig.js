// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Laae7vn8OBb7AICUFaZuq2lasID1USU",
  authDomain: "invitation-dd0ff.firebaseapp.com",
  projectId: "invitation-dd0ff",
  storageBucket: "invitation-dd0ff.firebasestorage.app",
  messagingSenderId: "77318879702",
  appId: "1:77318879702:web:6d0beee68a6abcd0c2cc77",
  measurementId: "G-WBDQTZZ2RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);