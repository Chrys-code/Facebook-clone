import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCt_5wIzQ_DqXEa66oqYFC4QPhIdhoUb6k",
  authDomain: "facebook-clone-5fe9e.firebaseapp.com",
  databaseURL: "https://facebook-clone-5fe9e.firebaseio.com",
  projectId: "facebook-clone-5fe9e",
  storageBucket: "facebook-clone-5fe9e.appspot.com",
  messagingSenderId: "1010194261017",
  appId: "1:1010194261017:web:6355d939f47d6315767688",
  measurementId: "G-9LKGBFMEJ2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
