// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVuvPRR2OyptLApFX3TS19Oxf1L-e_KD8",
    authDomain: "contact-manager-f189f.firebaseapp.com",
    projectId: "contact-manager-f189f",
    storageBucket: "contact-manager-f189f.appspot.com",
    messagingSenderId: "59268410196",
    appId: "1:59268410196:web:5895b45ee966db55bfb6c1",
    measurementId: "G-TH0QVN0LLS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;