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


document.getElementById("signup").addEventListener("click", () => { signUp() });
document.getElementById("sign_out").addEventListener("click", () => { signOut(auth) });
document.getElementById("sign_in").addEventListener("click", () => { signIn() });
document.getElementById("sign_in_with_google").addEventListener("click", () => { signInWithGoogle(); });



function getFormData() {
  const form = document.getElementById("app");
  const formData = new FormData(form);
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
  } catch (error) {
    console.log('error')
  }
}


// checking user status if changes login logout this runs
onAuthStateChanged(auth, (user) => {
    if (user) {
      document.getElementById("user").innerHTML = `
        <ul>
        <li>id: ${user.uid} </li>
        <li>user:${user.email}</li>
        <li>last sign in: ${user.metadata.lastSignInTime}</li>
        </ul>
        `;
    } else {
      document.getElementById("user").innerHTML = ''
      console.log("signed out");
    }
  });






