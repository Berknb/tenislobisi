import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword,} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyD76B6fk4cVRjOmbAlbihsKWQowr-D1SWs",
  authDomain: "tenislobisi.firebaseapp.com",
  databaseURL: "https://tenislobisi-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tenislobisi",
  storageBucket: "tenislobisi.appspot.com",
  messagingSenderId: "305605860522",
  appId: "1:305605860522:web:a46c80bdd8e19daef504d3",
  measurementId: "G-ME3E0Y3N2Q"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export function Signup(email, password){
   return createUserWithEmailAndPassword(auth, email, password)  
}
export function login(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}
export function logout(){
 return signOut(auth);
}
export function useAuth(){
  const [ currentUser, setCurrentUser ] = useState();


  useEffect(() => {
const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
return unsub;
  },[]
  )

  return currentUser
}
export {db}