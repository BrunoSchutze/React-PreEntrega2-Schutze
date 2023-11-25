import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-bruno-f8073.firebaseapp.com",
  projectId: "react-bruno-f8073",
  storageBucket: "react-bruno-f8073.appspot.com",
  messagingSenderId: "21779711389",
  appId: "1:21779711389:web:5f15c0902aff37cd5d5b74"
};

//AIzaSyDwXAkx-Llmntr-O-eG8QNoC4_mCsf-u1s

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
