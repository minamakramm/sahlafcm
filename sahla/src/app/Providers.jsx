import { Suspense, useEffect, useState } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster, toast } from 'react-hot-toast'
import { queryClient } from '@/lib/queryClient'
import { useAuthStore } from '@/stores/authStore'
import { useThemeStore } from '@/stores/themeStore'
import { useSettingsStore } from '@/stores/settingsStore'
import { useNotificationStore } from '@/stores/notificationStore.jsx'
import { supabase } from '@/lib/supabase'
import { initLenis, destroyLenis } from '@/lib/lenis'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Bell, Lock, RefreshCw, AlertTriangle } from 'lucide-react'

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
  const { i18n } = useTranslation()
  const user = useAuthStore((s) => s.user)
  const [permission, setPermission] = useState(
    typeof window !== 'undefined' && 'Notification' in window ? window.Notification.permission : 'default'
  )
  const [isActionLoading, setIsActionLoading] = useState(false)
  const [isFcmSupported, setIsFcmSupported] = useState(null) // null = checking, true = supported, false = unsupported

  const initTheme = useThemeStore((s) => s.initTheme)
  const fetchSettings = useSettingsStore((s) => s.fetchSettings)
  const subscribeToChanges = useSettingsStore((s) => s.subscribeToChanges)
  const fetchNotifications = useNotificationStore((s) => s.fetchNotifications)
  const subscribeToBroadcasts = useNotificationStore((s) => s.subscribeToBroadcasts)

  const setSession = useAuthStore((s) => s.setSession)
  const setLoading = useAuthStore((s) => s.setLoading)
  const fetchProfile = useAuthStore((s) => s.fetchProfile)

  useEffect(() => {
    const checkFCMSupport = async () => {
      try {
        const { isSupported } = await import('firebase/messaging')
        const supported = await isSupported()
        setIsFcmSupported(supported)
      } catch (err) {
        setIsFcmSupported(false)
      }
    }
    checkFCMSupport()
  }, [])

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

    // Listen for auth changes to sync the store
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('[Auth] onAuthStateChange event:', event, session?.user?.id)
      setSession(session)
      useNotificationStore.getState().setCurrentUserId(session?.user?.id || null)
      
      if (session) {
        fetchProfile(session.user.id).catch(() => {})
        syncUserXP(session.user.id)
      } else {
        useAuthStore.setState({
          user: null,
          profile: null,
          session: null,
          isProfileLoaded: false,
          isAuthenticated: false,
        })
      }
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

  // ─── Firebase Cloud Messaging (FCM) Integration ───
  useEffect(() => {
    if (!user || isFcmSupported !== true) {
      console.log('[FCM] Skipping setup:', !user ? 'no user' : `isFcmSupported=${isFcmSupported}`)
      return
    }

    let unsubForeground = null
    let cancelled = false

    const setupFCM = async () => {
      try {
        console.log('[FCM] ── Starting FCM setup for user:', user.id)

        const { requestPushPermission, setupForegroundListener } = await import('@/services/fcmService')
        const { showNotifToast } = await import('@/stores/notificationStore.jsx')

        if (cancelled) return

        // 1. Request permission + token (NOT deferred — do it immediately)
        console.log('[FCM] Step 1: Requesting push permission & token...')
        const token = await requestPushPermission(user.id)

        if (cancelled) return

        if (token) {
          console.log('%c[FCM] ✅ Token acquired successfully', 'color: #34d399; font-weight: bold', token.substring(0, 30) + '...')
        } else {
          console.warn('[FCM] ⚠️ No token returned — notifications will NOT work. Check browser permission & VAPID key.')
        }

        // 2. Set up foreground listener regardless (it may still receive if token was cached before)
        console.log('[FCM] Step 2: Setting up foreground message listener...')
        unsubForeground = await setupForegroundListener((payload) => {
          console.log('%c[FCM] 📩 Foreground message RECEIVED', 'color: #38bdf8; font-weight: bold', payload)

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
            console.log('[FCM] Showing toast for new notification:', newNotif.title)
            showNotifToast(newNotif)
            useNotificationStore.setState((state) => ({
              notifications: [newNotif, ...state.notifications],
              unreadCount: state.unreadCount + 1
            }))
          } else {
            console.log('[FCM] Duplicate notification skipped:', newNotif.title)
          }
        })

        if (unsubForeground) {
          console.log('%c[FCM] ✅ Foreground listener active', 'color: #34d399; font-weight: bold')
        } else {
          console.warn('[FCM] ⚠️ Foreground listener returned null — messaging may not be initialized')
        }

        console.log('[FCM] ── Setup complete ──')
      } catch (err) {
        console.error('[FCM] ❌ Setup FAILED:', err)
      }
    }

    setupFCM()

    return () => {
      cancelled = true
      if (unsubForeground) {
        Promise.resolve(unsubForeground).then((unsub) => {
          if (typeof unsub === 'function') {
            unsub()
            console.log('[FCM] Foreground listener unsubscribed.')
          }
        }).catch(() => {})
      }
    }
  }, [user, isFcmSupported])

  const isNotificationSupported = typeof window !== 'undefined' && 'Notification' in window && 'serviceWorker' in navigator;
  const showBlockingOverlay = user && isNotificationSupported && isFcmSupported === true && permission !== 'granted';

  const handleAllowClick = async () => {
    if (!user) return
    setIsActionLoading(true)
    try {
      const { requestPushPermission } = await import('@/services/fcmService')
      const token = await requestPushPermission(user.id)
      setPermission(window.Notification ? window.Notification.permission : 'default')
      if (window.Notification && window.Notification.permission === 'granted' && token) {
        toast.success(i18n.language === 'ar' ? 'تم تفعيل الإشعارات بنجاح!' : 'Notifications enabled successfully!')
      } else if (window.Notification && window.Notification.permission === 'denied') {
        toast.error(i18n.language === 'ar' ? 'يرجى إلغاء الحظر من إعدادات المتصفح.' : 'Please unblock notifications in your browser settings.')
      }
    } catch (err) {
      console.error(err)
      toast.error(i18n.language === 'ar' ? 'فشل إعداد الإشعارات. يرجى المحاولة مرة أخرى.' : 'Failed to set up notifications. Please try again.')
    } finally {
      setIsActionLoading(false)
    }
  }

  if (showBlockingOverlay) {
    const isRtl = i18n.language === 'ar';
    return (
      <NotificationBlockingOverlay 
        permission={permission} 
        onAllow={handleAllowClick} 
        isLoading={isActionLoading} 
        isRtl={isRtl}
      />
    );
  }

  return children
}

function NotificationBlockingOverlay({ permission, onAllow, isLoading, isRtl }) {
  const isDenied = permission === 'denied';

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-[#050508]/90 backdrop-blur-3xl select-none">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-500/10 blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary-500/10 blur-[100px] pointer-events-none animate-pulse" />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-md p-8 md:p-10 rounded-[2.5rem] bg-[#0c0c14]/95 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden text-center flex flex-col items-center gap-6"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Glow Header */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-500 via-purple-500 to-secondary-500" />

        {/* Bell Icon Container */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-accent-500/20 blur-xl animate-pulse" />
          <div className="relative w-16 h-16 rounded-3xl bg-gradient-to-br from-accent-500/20 to-purple-500/20 border border-accent-500/30 flex items-center justify-center text-accent-400">
            <Bell className="w-8 h-8 animate-bounce-in" />
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h2 className="text-2xl font-black tracking-tight text-white">
            {isDenied 
              ? (isRtl ? 'مطلوب إجراء: إلغاء حظر الإشعارات' : 'Action Required: Unblock Notifications')
              : (isRtl ? 'تفعيل الإشعارات للمتابعة' : 'Enable Notifications to Continue')
            }
          </h2>
          <p className="text-sm leading-relaxed text-white/50">
            {isDenied
              ? (isRtl 
                  ? 'لقد قمت بحظر الإشعارات مسبقاً. يجب عليك تفعيلها يدوياً من إعدادات المتصفح لتتمكن من استخدام المنصة.' 
                  : 'You have blocked notifications. You must manually enable them in your browser settings to access your account.')
              : (isRtl 
                  ? 'تطبيق سهلة يتطلب الإشعارات الفورية لإرسال تنبيهات الاختبارات، ومواعيد التسليم الدراسية، والإعلانات الهامة.' 
                  : 'Sahla requires push notifications to deliver real-time exam alerts, deadline reminders, and direct announcements.')
            }
          </p>
        </div>

        {/* Action Panel */}
        {isDenied ? (
          <div className="w-full space-y-4">
            {/* Guide Card */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-start space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <AlertTriangle size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {isRtl ? 'خطوات التفعيل' : 'How to enable'}
                </span>
              </div>
              <ol className="text-xs text-white/40 space-y-2 list-decimal list-inside">
                <li>
                  {isRtl 
                    ? 'اضغط على أيقونة القفل 🔒 بجانب رابط الموقع في شريط العنوان.' 
                    : 'Click the Lock icon 🔒 next to the website URL in the address bar.'}
                </li>
                <li>
                  {isRtl 
                    ? 'ابحث عن "الإشعارات" (Notifications) وقم بتغيير الإذن إلى "سماح" (Allow).' 
                    : 'Locate "Notifications" and toggle the permission to "Allow".'}
                </li>
                <li>
                  {isRtl 
                    ? 'اضغط على زر التحديث في الأسفل.' 
                    : 'Click the reload/refresh button below to verify.'}
                </li>
              </ol>
            </div>

            <button
              onClick={() => window.location.reload(true)}
              className="w-full h-12 glass-button flex items-center justify-center gap-2 text-sm"
            >
              <RefreshCw size={16} className="animate-spin-slow" />
              {isRtl ? 'تحديث الصفحة' : 'Reload Page'}
            </button>
          </div>
        ) : (
          <button
            onClick={onAllow}
            disabled={isLoading}
            className="w-full h-12 accent-button flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <RefreshCw size={16} className="animate-spin" />
                {isRtl ? 'جاري التفعيل...' : 'Enabling...'}
              </>
            ) : (
              <>
                <Bell size={16} />
                {isRtl ? 'تفعيل الإشعارات الآن' : 'Enable Notifications Now'}
              </>
            )}
          </button>
        )}

        {/* Footer Note */}
        <p className="text-[10px] text-white/30 tracking-wide">
          {isRtl 
            ? 'سيتلاشى هذا الحاجز تلقائياً بمجرد إعطاء صلاحية الوصول.' 
            : 'This screen will automatically close once permission is granted.'}
        </p>
      </div>
    </div>
  );
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
