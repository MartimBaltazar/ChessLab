// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd6KFn1x7yXx2G1Fofhw6ZQcCkWhfv4X4",
  authDomain: "cheab-d28c3.firebaseapp.com",
  projectId: "cheab-d28c3",
  storageBucket: "cheab-d28c3.appspot.com",
  messagingSenderId: "178176192645",
  appId: "1:178176192645:web:60e6ed2ea758d90dcf79ec"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const auth = firebase.auth();

export { auth };