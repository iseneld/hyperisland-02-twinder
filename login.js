import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";



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
 const analytics = getAnalytics(app);
 const auth = getAuth(app);
 const db = getFirestore(app);




function getFormData() {
  const form = document.getElementById("app");
  console.log(form)
  const formData = new FormData(form);
  console.log(formData)
  console.log(formData.get("pwd"))
  return { 'email': formData.get("email"), password: formData.get("pwd") }
  
}


async function signUp() {
  let user = getFormData();
  if (!user.email || !user.password) {
    return console.log("email & password required");
  }
  try {
    let userInDB = await createUserWithEmailAndPassword(auth, user.email, user.password);
  } catch (error) {
    console.log('error', error)
  }
}

async function signIn() {
  let user = getFormData();
  if(user.email && user.password){
    loginSuccess()
  }
  if (!user.email || !user.password) {
    return console.log("email & password required");
  }
  try {
    let userInDB = await signInWithEmailAndPassword(auth, user.email, user.password);
  } catch (error) {
    console.log("error", error);
  }
}

async function signInWithGoogle() {
  var provider = new GoogleAuthProvider(auth);
  provider.addScope("profile");
  provider.addScope("email");

  try {
    await signInWithPopup(auth, provider)
    loginSuccess()
  } catch (error) {
    console.log('error')
  }
}


// checking user status if changes login logout this runs
<<<<<<< HEAD
                // onAuthStateChanged(auth, (user) => {
                //     if (user) {
                //       document.getElementById("user").innerHTML = `
                //         <ul>
                //         <li>id: ${user.uid} </li>
                //         <li>user:${user.email}</li>
                //         <li>last sign in: ${user.metadata.lastSignInTime}</li>
                //         </ul>
                //         `;
                //     } else {
                //       document.getElementById("user").innerHTML = ''
                //       console.log("signed out");
                //     }
                //   });
=======
                onAuthStateChanged(auth, (user) => {
                  
                  if (user) {
                      // document.getElementById("user").innerHTML = `
                      //   <ul>
                      //   <li>id: ${user.uid} </li>
                      //   <li>user:${user.email}</li>
                      //   <li>last sign in: ${user.metadata.lastSignInTime}</li>
                      //   </ul>
                      //   `;
                    console.log("UID is " + user.uid);
                    
                    async function createCollectionWithUID() {
                          
                      await setDoc(doc(db, "users", `${user.uid}`), {
                        question01 : "",
                        question02 : "",
                        question03 : "",
                        question04 : "",
                        question05 : "",
                        question06 : "",
                        question07 : "",
                        question08 : "",
                        question09 : "",
                        question10 : ""
                      })
                        
                      console.log("something is saved")  
                    }
                    createCollectionWithUID()
                      
                    //  else {
                    //   document.getElementById("user").innerHTML = ''
                    //   console.log("signed out");
                    // }
                  }  
                });
>>>>>>> b854dfca2bb8c31453633ce1e48ba03e95b6f4d0


const loginPage = `
<form id="app" onsubmit="event.preventDefault();">
<label for="email">Enter your email:</label><br>
<input type="email" id="email" name="email"><br><br>

<label for="pwd">Password:</label><br>
<input type="password" id="pwd" name="pwd"><br><br>

<input type="submit" id="signup" name="signup" value="Sign up" /><br>
<input type="submit" id="sign_in_with_google" name="sign_in_with_google" value="Sign In with Google" /><br>
<input type="submit" id="sign_in"  name="sign_in" value="Sign In" /><br>

</form>`


const loggedIn = `
<form id="app" onsubmit="event.preventDefault();">

<input type="submit" id="sign_out" name="sign_out" value="Sign out" /><br><br><br>

<button><a href="./pages/question-1/question-1.html">Start the quiz!</a></button>
<br><br>

<div><img src="ready.gif"/></div>
</form>`



function pageLoad(){
  document.querySelector("section").innerHTML = loginPage;

  
  document.getElementById("signup").addEventListener("click", () => { signUp() });
  // document.getElementById("sign_out").addEventListener("click", () => { signOut(auth) });
  document.getElementById("sign_in").addEventListener("click", () => { signIn() });
  document.getElementById("sign_in_with_google").addEventListener("click", () => { signInWithGoogle(); });

 
}




function loginSuccess(){
  document.querySelector("section").innerHTML = loggedIn;

  document.getElementById("sign_out").addEventListener("click", () => { signOut(auth); pageLoad() });

}
pageLoad()
