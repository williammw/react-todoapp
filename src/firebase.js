import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCVSiOiOL5LQzAJerio2Tablk618gfTsE4",
  authDomain: "todoapp-88f5e.firebaseapp.com",
  databaseURL: "https://todoapp-88f5e.firebaseio.com",
  projectId: "todoapp-88f5e",
  storageBucket: "todoapp-88f5e.appspot.com",
  messagingSenderId: "225361118481",
  appId: "1:225361118481:web:366a892f32ce0e8a2d38b0"
})


const db = firebaseApp.firestore();

export default db;