
// Here I make the value of the slider show!
let slider = document.getElementById("question-4-slider");
let output = document.getElementById("show-values");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;

  if (this.value <=100){
      output.innerHTML = sliderSentences [5]
  }
  if (this.value <= 95){
      output.innerHTML = sliderSentences [4]
  }

  if (this.value < 75){
      output.innerHTML = sliderSentences [3]
  }

  if (this.value < 60) {
      output.innerHTML = sliderSentences [2]
  }

  if (this.value < 40){
    output.innerHTML = sliderSentences[1]
    }
 
  if (this.value < 20){
    output.innerHTML = sliderSentences[0]
    }

  if (this.value < 10){
    output.innerHTML = sliderSentences[7]
    }
}

let sliderSentences = 
    ["Quite a vibe actually", "Not bothered", "I´m fine", "My day was good before this",  "I want to destroy something", "Can I burn the internet?", "Drag slider!", "I actually feel happier now"];

output.innerHTML = sliderSentences [6]; 





//Firebase
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

 
 



document.getElementById("question-4-slider").onchange = async () =>{
  //Add a new info into database
  var user =  sessionStorage.getItem("user") 


  const inputs = document.getElementById("question-4-slider");
  console.log(inputs.value)


  function handleUpdate(){
  console.log(inputs.value);
};
inputs.addEventListener('change', handleUpdate);
  await updateDoc(doc(db, "users", `${user}`), {
      question04: `${inputs.value}`
  })
}