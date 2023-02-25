// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRzc-hNOB3Vm0cECYwBgvDR1KnRtbzLfI",
  authDomain: "project-3685819426107477554.firebaseapp.com",
  projectId: "project-3685819426107477554",
  storageBucket: "project-3685819426107477554.appspot.com",
  messagingSenderId: "86057106129",
  appId: "1:86057106129:web:7ebe568a9d7e3a8700e3f0",
  measurementId: "G-J5YWPX5BLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);



export {auth}