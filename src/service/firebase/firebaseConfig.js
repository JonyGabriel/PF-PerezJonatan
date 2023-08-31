
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAHoorbI-EHTzxjaDR1vFBAvOHPd8k7WAw",
    authDomain: "compu-sv.firebaseapp.com",
    projectId: "compu-sv",
    storageBucket: "compu-sv.appspot.com",
    messagingSenderId: "459464797161",
appId: "1:459464797161:web:7b15121798c9462223b978"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)