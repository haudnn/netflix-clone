
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCX9AsFiHQkPvIDvxNHCvbtWvRjNR-AWCI",
  authDomain: "netflix-5b025.firebaseapp.com",
  projectId: "netflix-5b025",
  storageBucket: "netflix-5b025.appspot.com",
  messagingSenderId: "951376535921",
  appId: "1:951376535921:web:dc1969a960a13ee7bed6d0",
  measurementId: "G-C5NY1VVC6H"
};
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()
export default app 
export { db, auth }