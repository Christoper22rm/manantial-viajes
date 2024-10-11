 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAr6YessPKPnzzv5aStPw58CHQFxvk-J2I",
   authDomain: "viaje-manantial.firebaseapp.com",
   projectId: "viaje-manantial",
   storageBucket: "viaje-manantial.appspot.com",
   messagingSenderId: "188819060575",
   appId: "1:188819060575:web:45f09474f828373d3628ea",
   measurementId: "G-3G7N1PH8VQ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);