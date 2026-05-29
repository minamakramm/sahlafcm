import { initializeApp } from 'firebase/app'
import { getMessaging, isSupported } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export const firebaseApp = initializeApp(firebaseConfig)

// Safe wrapper for messaging initialization to avoid crashing on unsupported platforms/modes
export async function getFirebaseMessaging() {
  try {
    const supported = await isSupported()
    if (!supported) {
      console.warn('[FCM] Firebase Cloud Messaging is not supported in this browser environment.')
      return null
    }
    return getMessaging(firebaseApp)
  } catch (error) {
    console.error('[FCM] Failed to initialize Firebase Messaging:', error)
    return null
  }
}
