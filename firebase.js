```javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    setDoc,
    updateDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

import {
    getAuth,
    signInAnonymously
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";


// ================================
// FIREBASE CONFIG
// ================================

const firebaseConfig = {
    apiKey: "AIzaSyAHxIt-uneG3CSGk-JUPkTG2zJ2zO8ra2t5g",
    authDomain: "arqam-tuc-shop.firebaseapp.com",
    projectId: "arqam-tuc-shop",
    storageBucket: "arqam-tuc-shop.firebasestorage.app",
    messagingSenderId: "182232116266",
    appId: "1:182232116266:web:0bf8185776faee5e912753",
    measurementId: "G-2VRHM6JPTH"
};


// ================================
// INITIALIZE FIREBASE
// ================================

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);


// ================================
// START FIREBASE
// ================================

async function startFirebase() {

    try {

        // Login anonymously
        if (!auth.currentUser) {

            await signInAnonymously(auth);

        }

        console.log("Firebase connected successfully.");

        return true;

    } catch (error) {

        console.error(
            "Firebase connection error:",
            error
        );

        alert(
            "Firebase connection failed:\n\n" +
            error.message
        );

        return false;
    }
}


// ================================
// EXPORTS
// ================================

export {

    app,

    db,

    auth,

    startFirebase,

    collection,

    addDoc,

    getDocs,

    doc,

    setDoc,

    updateDoc,

    deleteDoc

};
```
