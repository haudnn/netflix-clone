
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBg8l3-MBIrCMuJffVlB4Vimgx79OEm1Jk",
  authDomain: "netflix-clone-7f8ef.firebaseapp.com",
  projectId: "netflix-clone-7f8ef",
  storageBucket: "netflix-clone-7f8ef.appspot.com",
  messagingSenderId: "136184377775",
  appId: "1:136184377775:web:667ba9c6260711626b3f5a",
  measurementId: "G-FCMVY1YKCK"
};
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()
export default app 
export { db, auth }