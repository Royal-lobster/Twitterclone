import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVWE8kShnJeUXfKJYY3Tw0SeujfDwiVFs",
  authDomain: "royallobster-twitter-clone.firebaseapp.com",
  databaseURL: "https://royallobster-twitter-clone.firebaseio.com",
  projectId: "royallobster-twitter-clone",
  storageBucket: "royallobster-twitter-clone.appspot.com",
  messagingSenderId: "324994677344",
  appId: "1:324994677344:web:e42ae2f9477effe7692105",
  measurementId: "G-F82QPSHYQC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
