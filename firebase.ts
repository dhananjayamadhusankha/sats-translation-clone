// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_umQ8SfJfmX1P0J1PKpFIAvEv3lPm4cQ",
  authDomain: "saas-translater-clone.firebaseapp.com",
  projectId: "saas-translater-clone",
  storageBucket: "saas-translater-clone.appspot.com",
  messagingSenderId: "248519035941",
  appId: "1:248519035941:web:85a28c29315115efdb43cc",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, functions, db };
