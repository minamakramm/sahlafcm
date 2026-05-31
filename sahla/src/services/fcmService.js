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
  console.log('%c[FCM] ── Token Registration Pipeline Started ──', 'color: #a855f7; font-weight: bold')
  console.log('[FCM] User ID:', userId)

  if (!('Notification' in window) || !('serviceWorker' in navigator)) {
    console.error('[FCM] ❌ UNSENT — Browser does not support Notification API or Service Workers.')
    return null
  }
  console.log('[FCM] ✓ Browser supports Notification API & Service Workers')

  try {
    let permission = window.Notification.permission
    console.log('[FCM] Current permission state:', permission)

    if (permission === 'default') {
      console.log('[FCM] Requesting permission from user...')
      permission = await window.Notification.requestPermission()
      console.log('[FCM] User responded with:', permission)
    }

    if (permission !== 'granted') {
      console.warn(`[FCM] ❌ UNSENT — Permission is "${permission}". User must grant notification access.`)
      return null
    }
    console.log('[FCM] ✓ Permission granted')

    const supported = await isSupported()
    console.log('[FCM] Firebase isSupported():', supported)
    if (!supported) {
      console.error('[FCM] ❌ UNSENT — Firebase push messaging is not supported in this browser.')
      return null
    }

    const messaging = await getFirebaseMessaging()
    if (!messaging) {
      console.error('[FCM] ❌ UNSENT — getFirebaseMessaging() returned null. Firebase may not be configured correctly.')
      return null
    }
    console.log('[FCM] ✓ Firebase Messaging instance obtained')

    // Explicitly register the service worker from the public folder.
    let registration = null
    try {
      console.log('[FCM] Registering service worker: /firebase-messaging-sw.js ...')
      registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', {
        scope: '/'
      })

      // Wait until the service worker is fully active and ready
      await navigator.serviceWorker.ready
      console.log('[FCM] ✓ Service worker is ready. State:', registration.active?.state)
    } catch (swError) {
      console.error('[FCM] ❌ UNSENT — Service worker registration failed:', swError)
      throw swError
    }

    // Fetch the token from FCM
    let token = null
    try {
      console.log('[FCM] Requesting FCM token with VAPID key...')
      const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY
      console.log('[FCM] VAPID key present:', !!vapidKey, vapidKey ? `(${vapidKey.substring(0, 15)}...)` : '(MISSING!)')
      
      token = await getToken(messaging, {
        serviceWorkerRegistration: registration,
        vapidKey: vapidKey
      })
    } catch (err) {
      if (err.name === 'AbortError') {
        console.warn(
          '[FCM] ❌ UNSENT — Push service connection aborted.\n' +
          '  Try: clear site data in DevTools → Application → Storage → Clear site data, then refresh.'
        )
        return null
      }
      console.error('[FCM] ❌ UNSENT — getToken() threw an error:', err)
      throw err
    }

    if (!token) {
      console.warn('[FCM] ❌ UNSENT — getToken() returned null/empty. No registration token available.')
      return null
    }

    console.log('%c[FCM] ✅ TOKEN ACQUIRED', 'color: #34d399; font-weight: bold; font-size: 14px')
    console.log('[FCM] Token:', token.substring(0, 40) + '...')

    // Check if we've already saved this token to avoid redundant database writes
    const cachedToken = localStorage.getItem(FCM_TOKEN_KEY)
    if (cachedToken === token) {
      console.log('[FCM] Token unchanged from cached version — skipping DB write.')
      return token
    }

    console.log('[FCM] Syncing token to Supabase profiles...')

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
        console.warn('[FCM] ⚠️ The fcm_token column may not exist yet. Run: ALTER TABLE public.profiles ADD COLUMN fcm_token TEXT;')
      } else {
        console.error('[FCM] ⚠️ Failed to update token in profile:', error)
      }
    } else {
      localStorage.setItem(FCM_TOKEN_KEY, token)
      console.log('%c[FCM] ✅ Token synced to Supabase profile successfully', 'color: #34d399; font-weight: bold')
    }

    return token
  } catch (error) {
    // Don't log AbortErrors as scary red errors — they're just push being unavailable
    if (error.name === 'AbortError') {
      console.warn('[FCM] ❌ UNSENT — Push service unavailable. Notifications disabled for this session.')
      return null
    }
    console.error('[FCM] ❌ UNSENT — Unexpected error in token pipeline:', error)
    return null
  }
}

/**
 * Sets up a listener for messages received when the app is in the foreground.
 * @param {Function} onMessageCallback - Handler called with the incoming message payload
 * @returns {Promise<Function|null>} Unsubscribe function, or null if unsupported
 */
export async function setupForegroundListener(onMessageCallback) {
  console.log('[FCM] setupForegroundListener: Getting messaging instance...')
  const messaging = await getFirebaseMessaging()
  if (!messaging) {
    console.warn('[FCM] setupForegroundListener: ❌ messaging is null — cannot listen for foreground messages')
    return null
  }

  console.log('[FCM] setupForegroundListener: ✓ Attaching onMessage listener...')
  return onMessage(messaging, (payload) => {
    console.log('%c[FCM] 📩 FOREGROUND MESSAGE RECEIVED', 'color: #38bdf8; font-weight: bold; font-size: 14px', payload)
    onMessageCallback(payload)
  })
}
