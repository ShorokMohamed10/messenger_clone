import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp= !firebase.apps.length?
 firebase.initializeApp({
    apiKey: "AIzaSyC7hM6yeg-G9b49Vbo1WhTGhoMBbJgXu-s",
    authDomain: "messenger-clone-13a4b.firebaseapp.com",
    databaseURL: "https://messenger-clone-13a4b-default-rtdb.firebaseio.com",
    projectId: "messenger-clone-13a4b",
    storageBucket: "messenger-clone-13a4b.appspot.com",
    messagingSenderId: "1089528206344",
    //appId: "1:1089528206344:web:03a07119ed4ad8ed81adbd",
    measurementId: "G-YB2JTFHTEE"
  }): firebase.app();
  const db= firebaseApp.firestore();
  export default db;