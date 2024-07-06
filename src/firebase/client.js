import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbVjOmqQM05I5ZCS_xjN2mOS4mKGuDTig",
  authDomain: "diceclub-365.firebaseapp.com",
  projectId: "diceclub-365",
  storageBucket: "diceclub-365.appspot.com",
  messagingSenderId: "701028634452",
  appId: "1:701028634452:web:ed8243ae4fa1e91184c2c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);