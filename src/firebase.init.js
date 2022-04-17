// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh0MSMCSoqqTVwJEEWXnTYBsMeib4ttPU",
    authDomain: "dentist-surgery-services.firebaseapp.com",
    projectId: "dentist-surgery-services",
    storageBucket: "dentist-surgery-services.appspot.com",
    messagingSenderId: "759851523908",
    appId: "1:759851523908:web:12a7495072808994560111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;