import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlpY1gGINEPI8z5_SN7KCv_p0Bh0r8W7U",
  authDomain: "crwndb-4224b.firebaseapp.com",
  projectId: "crwndb-4224b",
  storageBucket: "crwndb-4224b.appspot.com",
  messagingSenderId: "688668429991",
  appId: "1:688668429991:web:ad3eae9fa424ec3a109582"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;