// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyCzp2cR-GmJzTybYwMVwhQn3eRncpLeZ-A",
  authDomain: "clone-968fb.firebaseapp.com",
  projectId: "clone-968fb",
  storageBucket: "clone-968fb.appspot.com",
  messagingSenderId: "27895051281",
  appId: "1:27895051281:web:7fb235f14e2cc9a1ed6db0"
})

// const db=firebaseApp.fireStore();
const auth=firebaseApp.auth();

export {auth};