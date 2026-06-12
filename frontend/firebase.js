// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "food-delivery-website-8de57.firebaseapp.com",
  projectId: "food-delivery-website-8de57",
  storageBucket: "food-delivery-website-8de57.firebasestorage.app",
  messagingSenderId: "833272514267",
  appId: "1:833272514267:web:8801fc4e3b78a52b716efe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export {app, auth};