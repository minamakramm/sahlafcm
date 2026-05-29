import { create } from 'zustand'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'
import { Sparkles } from 'lucide-react'
import { NotificationIcon } from '@/components/ui'

// ── LocalStorage helpers for read-status tracking ──────────────────
const STORAGE_KEY = 'sahla-read-notifications'
const getReadIds = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch { return [] }
}
const persistReadIds = (ids) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(ids)) } catch {}
}

// ── Beautiful toast for real-time incoming notifications ────────────
export const showNotifToast = (notif) => {
  // Play a subtle notification sound
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = 'sine'
    osc.frequency.setValueAtTime(880, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.15)
    gain.gain.setValueAtTime(0.08, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.3)
  } catch {}

  toast.custom((t) => (
    <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-[#0a0a0f]/80 border border-white/10 rounded-[2rem] shadow-2xl pointer-events-auto flex ring-1 ring-black ring-opacity-5 overflow-hidden backdrop-blur-3xl`}>
      <div className="flex-1 w-0 p-5">
        <div className="flex items-start">
          <div className="shrink-0 pt-0.5">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-inner ${
              notif.type === 'update' ? 'bg-accent-500/10 border-accent-500/20 text-accent-400' :
              notif.type === 'coach' ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' :
              'bg-secondary-500/10 border-secondary-500/20 text-secondary-400'
            }`}>
              {notif.type === 'coach' ? <Sparkles size={22} /> : <NotificationIcon size={24} active={false} animated={true} />}
            </div>
          </div>
          <div className="ml-4 flex-1 min-w-0">
            <p className="text-[10px] font-black text-white/40 tracking-widest uppercase mb-1">
              {notif.target_user_id ? 'Direct Message' : notif.type === 'coach' ? 'Smart Coach' : 'New Broadcast'}
            </p>
            <p className="text-base font-bold text-white mb-1 line-clamp-1 break-words">
              {notif.title}
            </p>
            <p className="text-sm text-white/50 leading-relaxed line-clamp-2 break-words">
              {notif.message}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-s border-white/5 min-w-[80px]">
        {notif.type === 'update' && (
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              if ('caches' in window) {
                try {
                  const names = await caches.keys();
                  await Promise.all(names.map(name => caches.delete(name)));
                } catch (e) {}
              }
              window.location.reload(true);
            }}
            className="flex-1 border-b border-white/5 px-4 py-3 flex items-center justify-center text-xs font-bold text-accent-400 hover:text-accent-300 transition-colors focus:outline-none"
          >
            Refresh
          </button>
        )}
        <button
          onClick={() => toast.dismiss(t.id)}
          className="flex-1 px-4 py-3 flex items-center justify-center text-xs font-bold text-white/20 hover:text-white transition-colors focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  ), { duration: 6000 });
};

// ── Store ──────────────────────────────────────────────────────────
export const useNotificationStore = create((set, get) => ({
  notifications: [],
  isLoading: false,
  isLive: false,
  currentUserId: null,
  unreadCount: 0,
  activeFilter: 'all', // 'all' | 'update' | 'system' | 'info' | 'event'

  setCurrentUserId: (id) => set({ currentUserId: id }),

  setActiveFilter: (filter) => set({ activeFilter: filter }),

  // ── Computed: filtered notifications ─────────────────────────────
  getFilteredNotifications: () => {
    const { notifications, activeFilter } = get()
    if (activeFilter === 'all') return notifications
    return notifications.filter(n => n.type === activeFilter)
  },

  // ── Recalculate unread count ─────────────────────────────────────
  _recalcUnread: () => {
    const readIds = getReadIds()
    const unread = get().notifications.filter(n => !readIds.includes(n.id)).length
    set({ unreadCount: unread })
  },

  // ── Mark all as read ─────────────────────────────────────────────
  markAllAsRead: () => {
    const ids = get().notifications.map(n => n.id)
    const existing = getReadIds()
    const merged = [...new Set([...existing, ...ids])]
    // Keep only the last 200 IDs to avoid localStorage bloat
    persistReadIds(merged.slice(-200))
    set({ unreadCount: 0 })
  },

  // ── Mark single as read ──────────────────────────────────────────
  markAsRead: (id) => {
    const existing = getReadIds()
    if (!existing.includes(id)) {
      const updated = [...existing, id].slice(-200)
      persistReadIds(updated)
    }
    get()._recalcUnread()
  },

  // ── Check if a notification is read ──────────────────────────────
  isRead: (id) => getReadIds().includes(id),

  // ── Fetch from Supabase ──────────────────────────────────────────
  fetchNotifications: async () => {
    set({ isLoading: true })
    try {
      let uid = get().currentUserId
      if (!uid) {
        const { data: { session } } = await supabase.auth.getSession()
        uid = session?.user?.id
        set({ currentUserId: uid })
      }

      let query = supabase
        .from('notifications')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false })

      if (uid) {
        query = query.or(`target_user_id.is.null,target_user_id.eq.${uid}`)
      } else {
        query = query.is('target_user_id', null)
      }

      const { data, error } = await query
      if (error) throw error
      set({ notifications: data || [] })
      get()._recalcUnread()
    } catch (error) {
      console.error('[Notifications] Fetch error:', error)
    } finally {
      set({ isLoading: false })
    }
  },

  // ── Real-time subscription ───────────────────────────────────────
  subscribeToBroadcasts: () => {
    if (get().isLive) return

    const channel = supabase
      .channel(`notifications-${Math.random().toString(36).slice(2)}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'notifications' },
        async (payload) => {
          const { new: notif } = payload
          if (!notif.is_active) return

          let myId = get().currentUserId
          
          // Re-verify ID if missing (safety net for race conditions)
          if (!myId) {
            const { data: { session } } = await supabase.auth.getSession()
            myId = session?.user?.id
            if (myId) set({ currentUserId: myId })
          }
          
          // Targeted check
          if (notif.target_user_id) {
            if (!myId || notif.target_user_id !== myId) return
          }

          showNotifToast(notif)
          set((state) => ({
            notifications: [notif, ...state.notifications]
          }))
          get()._recalcUnread()
        }
      )
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') set({ isLive: true })
      })

    return () => {
      supabase.removeChannel(channel)
      set({ isLive: false })
    }
  },

  // ── Broadcast (admin) ────────────────────────────────────────────
  broadcast: async (notifData) => {
    try {
      const { error } = await supabase.from('notifications').insert([notifData])
      if (error) throw error
      return { success: true }
    } catch (error) {
      console.error('[Notifications] Broadcast error:', error)
      return { success: false, error }
    }
  },

  // ── Delete (admin) ───────────────────────────────────────────────
  deleteNotification: async (id) => {
     try {
       const { error } = await supabase.from('notifications').delete().eq('id', id)
       if (error) throw error
       set((state) => ({
         notifications: state.notifications.filter(n => n.id !== id)
       }))
       get()._recalcUnread()
     } catch (error) {
       console.error('[Notifications] Delete error:', error)
     }
  }
}))
