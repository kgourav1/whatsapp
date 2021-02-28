// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCh9_N13ZqV7zSs4o-1iiO0LlwVoF2fSxw",
    authDomain: "mywhatsapp-e4be4.firebaseapp.com",
    projectId: "mywhatsapp-e4be4",
    storageBucket: "mywhatsapp-e4be4.appspot.com",
    messagingSenderId: "608903566501",
    appId: "1:608903566501:web:81916e934e862b5862294c",
    measurementId: "G-B7JY90S9T5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;