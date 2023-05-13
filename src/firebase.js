import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDuUJYgjJynn5t8SbfClPtPNRBlg1RMFCE",
  authDomain: "chat-6c7b6.firebaseapp.com",
  projectId: "chat-6c7b6",
  storageBucket: "chat-6c7b6.appspot.com",
  messagingSenderId: "1042666294683",
  appId: "1:1042666294683:web:6e9b3cb48624ae8313e53e",
  measurementId: "G-JT56F4QPVC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)
