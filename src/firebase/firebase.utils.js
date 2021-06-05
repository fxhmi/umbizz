import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCUiy6eLPqlpsHBJegdjCYek7utKxZ7cz4",
    authDomain: "umbizz-db.firebaseapp.com",
    databaseURL: "",
    projectId: "umbizz-db",
    storageBucket: "umbizz-db.appspot.com",
    messagingSenderId: "95966730532",
    appId: "1:95966730532:web:b579c6c895dc9289ac7bb1"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompts:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;