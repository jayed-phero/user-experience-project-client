// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdHBhS0LUwPnP7alB4T06yiMuSrgsuD0k",
  authDomain: "review-srvices.firebaseapp.com",
  projectId: "review-srvices",
  storageBucket: "review-srvices.appspot.com",
  messagingSenderId: "182883672895",
  appId: "1:182883672895:web:1e07d4aa89635477dce98a",
  measurementId: "G-QHV7LJT6Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;