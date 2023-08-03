// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYwsaKUxzq8jflsypf8AFyRTduI_lZxMM",
  authDomain: "food-villa-eb4c8.firebaseapp.com",
  projectId: "food-villa-eb4c8",
  storageBucket: "food-villa-eb4c8.appspot.com",
  messagingSenderId: "412356655088",
  appId: "1:412356655088:web:ebc4aca3eea63cec6bcf35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;