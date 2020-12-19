import firebase from 'firebase'

const firebaseApp  = firebase.initializeApp({
  apiKey: "AIzaSyBDf7AlVJrwsyAQEthq3sxj1Z3kOVJVBM4",
  authDomain: "clone-55a53.firebaseapp.com",
  projectId: "clone-55a53",
  storageBucket: "clone-55a53.appspot.com",
  messagingSenderId: "67448958245",
  appId: "1:67448958245:web:d8c2d02c3221d0ab74fecc",
  measurementId: "G-2GNS9NNPBL"
});

const db = firebase.firestore();

export default db;