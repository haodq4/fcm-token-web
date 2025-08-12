import { app } from './google-services-web-happyclub.js';
import { getMessaging, onBackgroundMessage } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-messaging-sw.js';
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