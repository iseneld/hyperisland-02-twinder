import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
  } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
  


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

//Linking divs to next page:

document.getElementById("1").addEventListener("click", function() {
    location.href = '../question-6/question-6.html';
});

  document.getElementById("2").addEventListener("click", function() {
    location.href = '../question-6/question-6.html';
});

  document.getElementById("3").addEventListener("click", function() {
    location.href = '../question-6/question-6.html';
});

  document.getElementById("4").addEventListener("click", function() {
    location.href = '../question-6/question-6.html';
});