// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBExeggac2MM2NOIRmSyOy9INZMkPz_opI",
  authDomain: "plantecare-tracker-auth.firebaseapp.com",
  projectId: "plantecare-tracker-auth",
  storageBucket: "plantecare-tracker-auth.firebasestorage.app",
  messagingSenderId: "912647859131",
  appId: "1:912647859131:web:b32164205b874aefc1f29e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;