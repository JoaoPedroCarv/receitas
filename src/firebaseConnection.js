// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVP0EI3EqLOvOm21YGYbPu7o8gZNI0OTw",
    authDomain: "bancoreceitas.firebaseapp.com",
    projectId: "bancoreceitas",
    storageBucket: "bancoreceitas.appspot.com",
    messagingSenderId: "1040988111781",
    appId: "1:1040988111781:web:12070f40af1a56246e5e4c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };