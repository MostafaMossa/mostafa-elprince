import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB2232NrlLv3LRuO33fDTfhl2ZMJQ6dDM4",
    authDomain: "mostafa-elprince.firebaseapp.com",
    projectId: "mostafa-elprince",
    storageBucket: "mostafa-elprince.appspot.com",
    messagingSenderId: "503789974659",
    appId: "1:503789974659:web:a8dbbe5d138364743a97b6",
    measurementId: "G-9EFSNB0K73"
}




const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)