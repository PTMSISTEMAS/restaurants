import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC6MttZs3VRwbdxB5q-MpMjDmRH1FpwVCo",
    authDomain: "restaurants-9a181.firebaseapp.com",
    projectId: "restaurants-9a181",
    storageBucket: "restaurants-9a181.appspot.com",
    messagingSenderId: "670920882099",
    appId: "1:670920882099:web:5597b9a9f86d494b52fdc6"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)