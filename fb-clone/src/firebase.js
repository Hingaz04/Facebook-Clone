// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpxhY6tuSYe77IUh5n-vHcnUBvvKv27Lk",
  authDomain: "facebook-clone-229f9.firebaseapp.com",
  projectId: "facebook-clone-229f9",
  storageBucket: "facebook-clone-229f9.appspot.com",
  messagingSenderId: "132896219921",
  appId: "1:132896219921:web:6c2a4c7d7fcf7c6ea2e2b0",
  measurementId: "G-WVGLJXCPXD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
export default firebase;
