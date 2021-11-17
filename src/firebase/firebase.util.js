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


// create user
export const createUserProfileDocument = async (userAuth,additionalData) => {
  if(!userAuth) return;
  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  console.log(userRef)

  const SnapShot = await userRef.get();
  if(!SnapShot.exists){
    const {displayName,email}  =userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        email,
        displayName,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log("an error occured while creating a user: ",error.message)
    }
  }

  return userRef;

}



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;