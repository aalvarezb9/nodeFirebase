// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRLb3c4uwECyWff9Xrdgrf4_I1hOFGxTw",
    authDomain: "contact-d9152.firebaseapp.com",
    projectId: "contact-d9152",
    storageBucket: "contact-d9152.appspot.com",
    messagingSenderId: "606312141585",
    appId: "1:606312141585:web:c0dacc93116a1ba4b872b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc }