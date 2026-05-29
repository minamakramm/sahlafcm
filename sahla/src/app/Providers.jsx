import { Suspense, useEffect } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { queryClient } from '@/lib/queryClient'
import { useAuthStore } from '@/stores/authStore'
import { useThemeStore } from '@/stores/themeStore'
import { useSettingsStore } from '@/stores/settingsStore'
import { useNotificationStore } from '@/stores/notificationStore.jsx'
import { supabase } from '@/lib/supabase'
import { initLenis, destroyLenis } from '@/lib/lenis'

/**
 * Calculate the current user's REAL XP from their own data and save it to profiles.xp.
 * RLS allows reading own data + updating own profile. Non-blocking, fire-and-forget.
 */
async function syncUserXP(userId) {
  try {
    const [lpRes, eaRes, evRes, profileRes] = await Promise.all([
      supabase.from('lecture_progress').select('is_completed, mcq_score, time_spent_seconds').eq('user_id', userId).limit(5000),
      supabase.from('exam_attempts').select('score').eq('user_id', userId).limit(5000),
      supabase.from('analytics_events').select('id', { count: 'exact', head: true }).eq('user_id', userId),
      supabase.from('profiles').select('level').eq('id', userId).maybeSingle()
    ])

    const lectures = lpRes.data || []
    const exams = eaRes.data || []
    const eventCount = evRes.count || 0
    const level = parseInt(profileRes.data?.level) || 1

    let lectureXP = 0, mcqXP = 0, timeXP = 0, examXP = 0
    lectures.forEach(l => {
      if (l.is_completed) lectureXP += 100
      if (l.mcq_score > 0) mcqXP += l.mcq_score
      if (l.time_spent_seconds > 0) timeXP += Math.floor(l.time_spent_seconds / 120)
    })
    exams.forEach(e => { examXP += (e.score || 0) * 2 })
    const engagementXP = Math.floor(eventCount * 0.2)
    const totalXP = (level * 500) + lectureXP + mcqXP + timeXP + examXP + engagementXP

    await supabase.from('profiles').update({ xp: totalXP, updated_at: new Date().toISOString() }).eq('id', userId)
  } catch (err) {
  }
}

function AppInitializer({ children }) {
  const initTheme = useThemeStore((s) => s.initTheme)
  const fetchSettings = useSettingsStore((s) => s.fetchSettings)
  const subscribeToChanges = useSettingsStore((s) => s.subscribeToChanges)
  const fetchNotifications = useNotificationStore((s) => s.fetchNotifications)
  const subscribeToBroadcasts = useNotificationStore((s) => s.subscribeToBroadcasts)

  const setSession = useAuthStore((s) => s.setSession)
  const setLoading = useAuthStore((s) => s.setLoading)
  const fetchProfile = useAuthStore((s) => s.fetchProfile)

    useEffect(() => {
    // 1. Theme first — synchronous, no network
    initTheme()

    // 2. Init Lenis smooth scroll (skips if reduced-motion is on)
    initLenis()

    // Safety timeout: if auth hangs for 5s, force-unblock UI
    const authTimeout = setTimeout(() => {
      if (useAuthStore.getState().isLoading) {
        useAuthStore.setState({ isInitialized: true })
        setLoading(false)
      }
    }, 5000)

    // 2. Auth initialization — CRITICAL PATH (blocks UI)
    // Get initial session immediately
    supabase.auth.getSession().then(({ data: { session } }) => {
      clearTimeout(authTimeout)
      setSession(session)
      useNotificationStore.getState().setCurrentUserId(session?.user?.id || null)
      useAuthStore.setState({ isInitialized: true })
      setLoading(false) // Unblock UI as fast as possible
      
      // Profile fetch is non-blocking — UI can render while this loads
      if (session) {
        fetchProfile(session.user.id).catch(() => {})
        
        // Sync XP & activity (deferred, non-blocking)
        syncUserXP(session.user.id)
      }
    }).catch((err) => {
      clearTimeout(authTimeout)
      useAuthStore.setState({ isInitialized: true })
      setLoading(false)
    })

    // Listen for auth changes (skip INITIAL_SESSION — getSession() above handles it)
    let initialSessionHandled = false
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      // Skip the first INITIAL_SESSION — getSession() already processed it
      if (event === 'INITIAL_SESSION') {
        if (!initialSessionHandled) {
          initialSessionHandled = true
          return // getSession().then() above already handled this
        }
      }

      setSession(session)
      useNotificationStore.getState().setCurrentUserId(session?.user?.id || null)
      
      if (event === 'SIGNED_IN' && session) {
        fetchProfile(session.user.id).catch(() => {})
        syncUserXP(session.user.id)
      } else if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
        useAuthStore.setState({
          user: null,
          profile: null,
          session: null,
          isProfileLoaded: false,
          isAuthenticated: false,
        })
      }
      // TOKEN_REFRESHED — no need to re-fetch profile, session is updated via setSession
    })

    // 3. Defer non-critical initialization — these don't block first paint
    // Use requestIdleCallback (or setTimeout fallback) to avoid blocking main thread
    const scheduleDeferred = window.requestIdleCallback || ((cb) => setTimeout(cb, 100))
    
    const deferredId = scheduleDeferred(() => {
      fetchSettings()
      fetchNotifications()
    })

    // Subscriptions can wait even longer
    let unsubSettings
    let unsubNotifications
    const subId = scheduleDeferred(() => {
      unsubSettings = subscribeToChanges()
      unsubNotifications = subscribeToBroadcasts()
    })

    // 4. Periodic XP Sync (every 5 minutes)
    const activityInterval = setInterval(() => {
      const { session } = useAuthStore.getState()
      if (session?.user?.id) {
        syncUserXP(session.user.id)
      }
    }, 1000 * 60 * 5)

    return () => {
      clearTimeout(authTimeout)
      clearInterval(activityInterval)
      subscription?.unsubscribe()
      destroyLenis()
      if (typeof unsubSettings === 'function') unsubSettings()
      if (typeof unsubNotifications === 'function') unsubNotifications()
      // Cancel if available
      if (window.cancelIdleCallback) {
        window.cancelIdleCallback(deferredId)
        window.cancelIdleCallback(subId)
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const user = useAuthStore((s) => s.user)

  // ─── Firebase Cloud Messaging (FCM) Integration ───
  useEffect(() => {
    if (!user) return

    let unsubForeground = null
    const scheduleDeferred = window.requestIdleCallback || ((cb) => setTimeout(cb, 500))

    const setupFCM = async () => {
      try {
        const { requestPushPermission, setupForegroundListener } = await import('@/services/fcmService')
        const { showNotifToast } = await import('@/stores/notificationStore.jsx')

        // 1. Request token & permission (deferred to requestIdleCallback)
        scheduleDeferred(() => {
          requestPushPermission(user.id).catch(err => {
            console.error('[FCM] Error in requestPushPermission:', err)
          })
        })

        // 2. Listen to foreground events
        unsubForeground = await setupForegroundListener((payload) => {
          // Avoid duplicate toast if the Supabase real-time subscription is active and has handled it
          const newNotif = {
            id: payload.messageId || Math.random().toString(),
            title: payload.notification?.title || payload.data?.title || 'Sahla Alert',
            message: payload.notification?.body || payload.data?.body || '',
            type: payload.data?.type || 'info',
            created_at: new Date().toISOString(),
            target_user_id: user.id
          }

          const { notifications } = useNotificationStore.getState()
          const exists = notifications.some(
            (n) => n.title === newNotif.title && n.message === newNotif.message
          )

          if (!exists) {
            showNotifToast(newNotif)
            useNotificationStore.setState((state) => ({
              notifications: [newNotif, ...state.notifications],
              unreadCount: state.unreadCount + 1
            }))
          }
        })
      } catch (err) {
        console.error('[FCM] Setup failed:', err)
      }
    }

    setupFCM()

    return () => {
      if (unsubForeground) {
        // Since setupForegroundListener returns a promise of the unsubscribe function, we resolve it
        Promise.resolve(unsubForeground).then((unsub) => {
          if (typeof unsub === 'function') {
            unsub()
          }
        }).catch(() => {})
      }
    }
  }, [user])

  return children
}

// Loading fallback for Suspense
function SuspenseFallback() {
  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ background: 'var(--bg-base)' }}>
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-t-accent-500" style={{ borderColor: 'var(--border-default)', borderTopColor: '#8b5cf6' }} />
        <p className="text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>Loading…</p>
      </div>
    </div>
  )
}

export function Providers({ children }) {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<SuspenseFallback />}>
          <AppInitializer>
            {children}
          </AppInitializer>
        </Suspense>

        {/* Toast notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--bg-elevated)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--border-default)',
              borderRadius: '20px',
              color: 'var(--text-primary)',
              fontSize: '14px',
              padding: '12px 16px',
              boxShadow: 'var(--shadow-lg)',
            },
            success: {
              iconTheme: {
                primary: '#6366f1',
                secondary: 'white',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: 'white',
              },
            },
          }}
        />

        {/* React Query Devtools — dev only, lazy loaded */}
        {import.meta.env.VITE_APP_ENV === 'development' && (
          <Suspense fallback={null}>
            <DevtoolsLazy />
          </Suspense>
        )}
      </QueryClientProvider>
    </HelmetProvider>
  )
}

// Lazy-load devtools so they don't add to initial bundle
import { lazy } from 'react'
const DevtoolsLazy = lazy(() =>
  import('@tanstack/react-query-devtools').then(m => ({
    default: m.ReactQueryDevtools,
  }))
)
