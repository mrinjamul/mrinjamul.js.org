import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArAtF4XBrbA4eq1vuhVZUo1LdtGrtyOS0",
  authDomain: "injamul-7465c.firebaseapp.com",
  databaseURL: "https://injamul-7465c.firebaseio.com",
  projectId: "injamul-7465c",
  storageBucket: "injamul-7465c.appspot.com",
  messagingSenderId: "714873804548",
  appId: "1:714873804548:web:ae8565fd81a31c6faae251",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
