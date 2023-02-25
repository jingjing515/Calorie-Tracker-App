// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtaOqdDIAkoZc7kd62iUvIuvFLN8VhXVQ",
  authDomain: "myapp-2e85c.firebaseapp.com",
  projectId: "myapp-2e85c",
  storageBucket: "myapp-2e85c.appspot.com",
  messagingSenderId: "356809760841",
  appId: "1:356809760841:web:a29756801308eee2b29f98",
};

// Initialize Firebase
const myApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(myApp);
