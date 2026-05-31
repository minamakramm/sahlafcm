// ── Firebase Messaging Service Worker ───────────────────────────────
// This file runs in the background, independent of the main React app.
// It is served from the public folder.

importScripts('https://www.gstatic.com/firebasejs/12.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.13.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker
// Note: These are public client configuration values
firebase.initializeApp({
  apiKey: "AIzaSyAOxfkgk-c0mDiHajsvLthszLf4JxocYiE",
  authDomain: "sahla-study.firebaseapp.com",
  projectId: "sahla-study",
  storageBucket: "sahla-study.firebasestorage.app",
  messagingSenderId: "303294193638",
  appId: "1:303294193638:web:9ae2c21d0019bf83a7c027"
});

const messaging = firebase.messaging();

// Force immediate activation and client control on update
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  console.log('[FCM SW] Received background message:', payload);

  // If the payload contains a notification object, the browser automatically shows it.
  // We must not display a duplicate notification manually.
  if (payload.notification) {
    console.log('[FCM SW] Notification payload detected. Browser will auto-display.');
    return;
  }

  const notificationTitle = payload.data?.title || 'Sahla';
  
  const notificationOptions = {
    body: payload.data?.body || 'Check out the latest updates!',
    icon: '/notification.svg',
    badge: '/notification-badge.svg',
    tag: payload.data?.tag || 'sahla-general',
    renotify: true,
    data: {
      url: payload.data?.url || '/'
    }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click to focus or open window
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const targetUrl = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      // If a tab is already open, focus it
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus().then((focusedClient) => {
            if ('navigate' in focusedClient) {
              return focusedClient.navigate(targetUrl);
            }
          });
        }
      }
      // Otherwise open a new tab
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
