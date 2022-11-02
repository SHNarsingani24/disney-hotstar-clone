import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCVw9AskOCc2D3kXQyFGwEHY7IQ3j3AGbA",
    authDomain: "disneyplus-clone-7990a.firebaseapp.com",
    projectId: "disneyplus-clone-7990a",
    storageBucket: "disneyplus-clone-7990a.appspot.com",
    messagingSenderId: "828892678889",
    appId: "1:828892678889:web:fce6aa99040814e189fe78",
    measurementId: "G-G38TB530DS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export default db;
export { auth, storage };