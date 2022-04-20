import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,signOut,onAuthStateChanged} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAjRKHc-HWHIhGo1AieOUdwkaGs-y7P1Rg",
    authDomain: "fireblog-app-altas.firebaseapp.com",
    projectId: "fireblog-app-altas",
    storageBucket: "fireblog-app-altas.appspot.com",
    messagingSenderId: "456015255030",
    appId: "1:456015255030:web:8d89a717d042c5a24ea3d7"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const yeniKullaniciEkle = (email, password,navigate) =>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential);
    navigate("/login")
    // ...
  })
  .catch((error) => {
      console.log(error);
    // ..
  });
}

export const kullaniciGiris = (email, password,navigete,setError) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      console.log(userCredential.user.email);
      navigete("/");
      // ...
    })
    .catch((error) => {
        setError(true)
    });
}

export const cikis =() => {
    signOut(auth);

}

export const mevcutKullanici = (setCurrentUser) =>{
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setCurrentUser(currentUser)
        } else {
            setCurrentUser(false)
        }
      });
}