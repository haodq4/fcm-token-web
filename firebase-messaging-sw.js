importScripts("https://www.gstatic.com/firebasejs/10.3.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.3.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCbvoGeyqsnQPqXioPaivQl_CVw1KDtLqg",
  authDomain: "happy-club-stg.firebaseapp.com",
  projectId: "happy-club-stg",
  storageBucket: "happy-club-stg.firebasestorage.app",
  messagingSenderId: "428613555450",
  appId: "1:428613555450:web:f3bbdbcff7af356e19e543",
  measurementId: "G-SR5MNPQMP6"
});

const messaging = firebase.messaging();
