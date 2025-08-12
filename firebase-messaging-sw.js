import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js';
import { getMessaging, onBackgroundMessage } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-messaging.js';

const firebaseConfig = {
  apiKey: "AIzaSyCbvoGeyqsnQPqXioPaivQl_CVw1KDtLqg",
  authDomain: "happy-club-stg.firebaseapp.com",
  projectId: "happy-club-stg",
  storageBucket: "happy-club-stg.firebasestorage.app",
  messagingSenderId: "428613555450",
  appId: "1:428613555450:web:f3bbdbcff7af356e19e543",
  measurementId: "G-SR5MNPQMP6"
};

const app = initializeApp(firebaseConfig);
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js';
import { getMessaging, onBackgroundMessage } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-messaging-sw.js';

// TODO: Replace with your project's actual configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // Or your preferred icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});