// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkEcRBB5wy_Utkw_tGXTbudyCrstdg6EM",
    authDomain: "chef-recipe-hunter-clien-cc229.firebaseapp.com",
    projectId: "chef-recipe-hunter-clien-cc229",
    storageBucket: "chef-recipe-hunter-clien-cc229.appspot.com",
    messagingSenderId: "1085476913789",
    appId: "1:1085476913789:web:a16f9446da3bc8df82e714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;