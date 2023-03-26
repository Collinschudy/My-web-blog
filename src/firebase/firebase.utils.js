import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { useNavigate } from "react-router-dom";



const firebaseConfig = {
  apiKey: "AIzaSyAVsqJS1XV-BVa7WaB1obO3p38afiEZAS8",
  authDomain: "my-web-blog-89558.firebaseapp.com",
  projectId: "my-web-blog-89558",
  storageBucket: "my-web-blog-89558.appspot.com",
  messagingSenderId: "422082788483",
  appId: "1:422082788483:web:ece14b550503b14ebf2fb6",
  measurementId: "G-9TNWCX19SV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app)

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });



export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(db, `users/${userAuth.uid}`);
   
    const snapShot = await getDoc(userRef);
    console.log(snapShot);

    if (!snapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
            }
    }
    return userRef;
    

}
