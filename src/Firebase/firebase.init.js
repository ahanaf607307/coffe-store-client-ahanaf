// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRYptA6Nxa0UR8Pg56-WOpxdw4RCHZmgk",
  authDomain: "coffe-store-ahanaf.firebaseapp.com",
  projectId: "coffe-store-ahanaf",
  storageBucket: "coffe-store-ahanaf.firebasestorage.app",
  messagingSenderId: "1058830689591",
  appId: "1:1058830689591:web:08017ba3ea12137cd026b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth