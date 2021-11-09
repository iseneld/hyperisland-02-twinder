import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

<<<<<<< HEAD
=======
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
  } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
  

>>>>>>> b854dfca2bb8c31453633ce1e48ba03e95b6f4d0

const firebaseConfig = {
   apiKey: "AIzaSyAzkY6QneE4ipawLKGPm8xMSBc3MRjz1Ew",
   authDomain: "authentication-eb5d0.firebaseapp.com",
   projectId: "authentication-eb5d0",
   storageBucket: "authentication-eb5d0.appspot.com",
   messagingSenderId: "739211806581",
   appId: "1:739211806581:web:9c2a3ef7167a3812e4753c",
   measurementId: "G-RWPJ75JFP3"
 };




 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

<<<<<<< HEAD
=======




>>>>>>> b854dfca2bb8c31453633ce1e48ba03e95b6f4d0
 
 
document.getElementById("1").onclick = async () =>{
    //Add a new info into database
    await setDoc(doc(db, "rorschachTest", "savedAnswer"), {
        answerIs: "1"
    })
}
document.getElementById("2").onclick = async () =>{
    //Add a new info into database
    await setDoc(doc(db, "rorschachTest", "savedAnswer"), {
        answerIs: "2"
    })
}
document.getElementById("3").onclick = async () =>{
    //Add a new info into database
    await setDoc(doc(db, "rorschachTest", "savedAnswer"), {
        answerIs: "3"
    })
}
document.getElementById("4").onclick = async () =>{
    //Add a new info into database
    await setDoc(doc(db, "rorschachTest", "savedAnswer"), {
        answerIs: "4"
    })
}