import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyCuLhSioGM1s1TP4PPhifhpDZdMG0HmrFg",
    authDomain: "comment1-8c7a6.firebaseapp.com",
    databaseURL: "https://comment1-8c7a6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "comment1-8c7a6",
    storageBucket: "comment1-8c7a6.appspot.com",
    messagingSenderId: "285625961512",
    appId: "1:285625961512:web:e38c3a6e7112a29b4f791d",
    measurementId: "G-FC3JG2HDHQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase