


import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";




const firebaseConfig = {
  apiKey: "AIzaSyDrDYK4lSH8nQ_k7hfblPje3E1Z8B076hk",
  authDomain: "music-mp-4c6c2.firebaseapp.com",
  projectId: "music-mp-4c6c2",
  storageBucket: "music-mp-4c6c2.appspot.com",
  messagingSenderId: "51792205302",
  appId: "1:51792205302:web:c5e35f060c010ee3a1e3d7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;
