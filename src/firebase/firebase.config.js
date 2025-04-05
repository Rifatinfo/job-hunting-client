// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGbt5H8KDBkFaQrwZDWaxo5rKfFPiWlrE",
  authDomain: "job-hunting-5f68e.firebaseapp.com",
  projectId: "job-hunting-5f68e",
  storageBucket: "job-hunting-5f68e.firebasestorage.app",
  messagingSenderId: "626634572295",
  appId: "1:626634572295:web:167b50cf786ca5c9aa60a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app