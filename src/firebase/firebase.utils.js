// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBe39Kto3UXPgdaAmmtVPvSQl3q-W3Yjo",
  authDomain: "crown-db-3c0f9.firebaseapp.com",
  projectId: "crown-db-3c0f9",
  storageBucket: "crown-db-3c0f9.appspot.com",
  messagingSenderId: "990198569525",
  appId: "1:990198569525:web:c7ab4310d0e7ee4c7faf7c",
  measurementId: "G-HBSBV6LHRZ",
};

export const createUserProfileDocument = async (userAuth, additionlData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionlData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

// Google Auth Provider setup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Function to handle sign in with Google
const signInWithGoogle = () => auth.signInWithPopup(provider);

// Export the necessary modules
export { firebase, auth, firestore, signInWithGoogle };
