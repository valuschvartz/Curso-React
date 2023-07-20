import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvd0hlGTDjKgTGVXveH99FeBM6Hw2FTH0",
  authDomain: "ojala-fb7c7.firebaseapp.com",
  projectId: "ojala-fb7c7",
  storageBucket: "ojala-fb7c7.appspot.com",
  messagingSenderId: "677016769035",
  appId: "1:677016769035:web:ddaba6a3ecedee8da66d0e",
  measurementId: "G-DMJ1C7PRB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
