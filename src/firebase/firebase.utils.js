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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompts:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;