import { getToken, onMessage, isSupported } from 'firebase/messaging'
import { getFirebaseMessaging } from '@/lib/firebase'
import { supabase } from '@/lib/supabase'

const FCM_TOKEN_KEY = 'sahla-fcm-token'

// Singleton guard — prevent concurrent registration calls from React re-renders
let _pendingRegistration = null

/**
 * Request notification permission, retrieve FCM token, and save it to the user's profile.
 * @param {string} userId - The authenticated user's ID
 */
export async function requestPushPermission(userId) {
  if (!userId) return null

  // If there's already a registration in progress, return that same promise
  if (_pendingRegistration) return _pendingRegistration

  _pendingRegistration = _requestPushPermissionImpl(userId)
  try {
    return await _pendingRegistration
  } finally {
    _pendingRegistration = null
  }
}

async function _requestPushPermissionImpl(userId) {
  if (!('Notification' in window) || !('serviceWorker' in navigator)) {
    console.warn('[FCM] This browser does not support notifications or service workers.')
    return null
  }

  try {
    let permission = Notification.permission

    if (permission === 'default') {
      permission = await Notification.requestPermission()
    }

    if (permission !== 'granted') {
      console.warn('[FCM] Notification permission was denied or not granted.')
      return null
    }

    const supported = await isSupported()
    if (!supported) {
      console.warn('[FCM] Push messaging is not supported in this browser.')
      return null
    }

    const messaging = await getFirebaseMessaging()
    if (!messaging) return null

    // Explicitly register the service worker from the public folder.
    let registration = null
    try {
      registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', {
        scope: '/'
      })

      // Wait until the service worker is fully active and ready
      await navigator.serviceWorker.ready
      console.log('[FCM] Service worker is ready.')
    } catch (swError) {
      console.error('[FCM] Service worker registration failed:', swError)
      throw swError
    }

    // Fetch the token from FCM
    let token = null
    try {
      token = await getToken(messaging, {
        serviceWorkerRegistration: registration,
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
      })
    } catch (err) {
      if (err.name === 'AbortError') {
        console.warn(
          '[FCM] Push notifications are unavailable — browser could not connect to push service.\n' +
          '  Try: clear site data in DevTools → Application → Storage → Clear site data, then refresh.'
        )
        return null
      }
      throw err
    }

    if (!token) {
      console.warn('[FCM] No registration token available.')
      return null
    }

    // Check if we've already saved this token to avoid redundant database writes
    const cachedToken = localStorage.getItem(FCM_TOKEN_KEY)
    if (cachedToken === token) {
      return token
    }

    console.log('[FCM] Token acquired. Syncing with profile...')

    // Save token to Supabase profiles table
    const { error } = await supabase
      .from('profiles')
      .update({ 
        fcm_token: token,
        updated_at: new Date().toISOString()
      })
      .eq('id', userId)

    if (error) {
      if (error.code === 'PGRST204') {
        console.warn('[FCM] The fcm_token column may not exist yet. Run: ALTER TABLE public.profiles ADD COLUMN fcm_token TEXT;')
      } else {
        console.error('[FCM] Failed to update token in profile:', error)
      }
    } else {
      localStorage.setItem(FCM_TOKEN_KEY, token)
      console.log('[FCM] Token synchronized with profile.')
    }

    return token
  } catch (error) {
    // Don't log AbortErrors as scary red errors — they're just push being unavailable
    if (error.name === 'AbortError') {
      console.warn('[FCM] Push service unavailable. Notifications disabled for this session.')
      return null
    }
    console.error('[FCM] Error acquiring notification permission/token:', error)
    return null
  }
}

/**
 * Sets up a listener for messages received when the app is in the foreground.
 * @param {Function} onMessageCallback - Handler called with the incoming message payload
 * @returns {Promise<Function|null>} Unsubscribe function, or null if unsupported
 */
export async function setupForegroundListener(onMessageCallback) {
  const messaging = await getFirebaseMessaging()
  if (!messaging) return null

  return onMessage(messaging, (payload) => {
    console.log('[FCM] Received foreground message:', payload)
    onMessageCallback(payload)
  })
}
