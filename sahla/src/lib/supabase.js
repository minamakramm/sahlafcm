import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '[Sahla] Missing Supabase credentials. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env'
  )
}

/**
 * Use the Web Locks API to prevent concurrent token refresh requests
 * across tabs and within the same tab. This stops the 429 rate-limit
 * errors from Supabase's /token endpoint.
 */
const lockOptions = typeof navigator !== 'undefined' && navigator.locks
  ? {
      lock: async (name, acquireTimeout, fn) => {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), acquireTimeout)
        try {
          return await navigator.locks.request(
            name,
            acquireTimeout > 0 ? { signal: controller.signal } : {},
            async () => {
              clearTimeout(timeoutId)
              return await fn()
            }
          )
        } catch (err) {
          clearTimeout(timeoutId)
          if (err.name === 'AbortError') {
            // Timed out waiting for lock — another tab is refreshing
            console.warn('[Supabase] Lock acquisition timed out, skipping refresh')
            return // silently skip, the other tab will have refreshed
          }
          throw err
        }
      },
    }
  : {} // Fallback: no lock if Web Locks not supported

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '', {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storageKey: 'sahla-auth',
    flowType: 'pkce',
    ...lockOptions,
  },
  realtime: {
    params: {
      eventsPerSecond: 2,
    },
  },
})
