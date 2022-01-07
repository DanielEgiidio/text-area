import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBfzSMyC-377LZczstMLIzD3VYgN3rcWUs",
  authDomain: "textarea-2cf1b.firebaseapp.com",
  projectId: "textarea-2cf1b",
  storageBucket: "textarea-2cf1b.appspot.com",
  messagingSenderId: "842515501142",
  appId: "1:842515501142:web:4719900896ae1dd40debf7"
}).auth();