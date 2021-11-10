import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";


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

 
 
document.querySelector(".truth").onclick = async () =>{
    //Add a new info into database
    
    var user =  sessionStorage.getItem("user") 
    await updateDoc(doc(db, "users", `${user}`), {
        question01: "truth"
    })
    
}
document.querySelector(".truth--dare").onclick = async () =>{
    //Add a new info into database
    var user =  sessionStorage.getItem("user") 
    await updateDoc(doc(db, "users", `${user}`), {
        question01 : "dare"
    })
}

//change text color when answer is clicked


document.getElementById("changeYellow").onclick = function() {
	document.getElementById("output").style.color = 'yellow';
}

document.getElementById("changeRed").onclick = function() {
	document.getElementById("output2").style.color = 'red';
}


