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

 
 
document.getElementById("1").onclick = async () =>{
    //Add a new info into database
    
    var user =  sessionStorage.getItem("user") 
    await updateDoc(doc(db, "users", `${user}`), {
        question10: "Aries"
    })
    
}
document.getElementById("2").onclick = async () =>{
    //Add a new info into database
    var user =  sessionStorage.getItem("user") 
    await updateDoc(doc(db, "users", `${user}`), {
        question10: "Taurus"
    })
}
document.getElementById("3").onclick = async () =>{
  //Add a new info into database
  var user =  sessionStorage.getItem("user") 
  await updateDoc(doc(db, "users", `${user}`), {
      question10: "Gemini"
  })
}
document.getElementById("4").onclick = async () =>{
  //Add a new info into database
  var user =  sessionStorage.getItem("user") 
  await updateDoc(doc(db, "users", `${user}`), {
      question10: "Cancer"
  })
}
document.getElementById("5").onclick = async () =>{
    //Add a new info into database
    var user =  sessionStorage.getItem("user") 
    await updateDoc(doc(db, "users", `${user}`), {
        question10: "Leo"
    })
  }
  document.getElementById("6").onclick = async () =>{
    //Add a new info into database
    var user =  sessionStorage.getItem("user") 
    await updateDoc(doc(db, "users", `${user}`), {
        question10: "Virgo"
    })
  }
  document.getElementById("7").onclick = async () =>{
    //Add a new info into database
    var user =  sessionStorage.getItem("user") 
    await updateDoc(doc(db, "users", `${user}`), {
        question10: "Libra"
    })
  }
  document.getElementById("8").onclick = async () =>{
    //Add a new info into database
    var user =  sessionStorage.getItem("user") 
    await updateDoc(doc(db, "users", `${user}`), {
        question10: "Scorpio"
    })
  }
  document.getElementById("9").onclick = async () =>{
    //Add a new info into database
    var user =  sessionStorage.getItem("user") 
    await updateDoc(doc(db, "users", `${user}`), {
        question10: "Sagittarius"
    })
  }
  document.getElementById("10").onclick = async () =>{
    //Add a new info into database
    var user =  sessionStorage.getItem("user") 
    await updateDoc(doc(db, "users", `${user}`), {
        question10: "Capricorn"
    })
  }
  document.getElementById("11").onclick = async () =>{
    //Add a new info into database
    var user =  sessionStorage.getItem("user") 
    await updateDoc(doc(db, "users", `${user}`), {
        question10: "Aquarius"
    })
  }
  document.getElementById("12").onclick = async () =>{
    //Add a new info into database
    var user =  sessionStorage.getItem("user") 
    await updateDoc(doc(db, "users", `${user}`), {
        question10: "Pisces"
    })
  }


