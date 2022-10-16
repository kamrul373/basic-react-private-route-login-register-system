// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6C7nWfdESWRMyvUfnU-7XdxsIJB0NzGs",
    authDomain: "fantastic-auth.firebaseapp.com",
    projectId: "fantastic-auth",
    storageBucket: "fantastic-auth.appspot.com",
    messagingSenderId: "317384669260",
    appId: "1:317384669260:web:0fd80fb6a3da0d01e35ce9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;