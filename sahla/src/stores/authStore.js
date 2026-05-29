import { create } from 'zustand'
import { supabase } from '@/lib/supabase'

export const useAuthStore = create((set, get) => ({
  // State
  user: null,
  profile: null,
  session: null,
  isLoading: true,
  isProfileLoading: false,
  isInitialized: false,
  isAuthenticated: false,

  // Actions
  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  setProfile: (profile) => set({ profile }),

  setSession: (session) =>
    set({
      session,
      user: session?.user ?? null,
      isAuthenticated: !!session?.user,
    }),

  setLoading: (isLoading) => set({ isLoading }),

  /**
   * Fetch user profile from Supabase.
   * Deduplicates concurrent calls for the same userId to avoid
   * hammering the API (which contributes to 429 rate-limit errors).
   */
  _pendingProfileFetch: null,
  fetchProfile: async (userId) => {
    // Deduplicate: if we're already fetching for this user, return the existing promise
    const pending = get()._pendingProfileFetch
    if (pending && pending.userId === userId) {
      return pending.promise
    }

    const promise = (async () => {
    try {
      console.log(`[Auth Store] Fetching profile for ${userId}...`)
      set({ isProfileLoading: true })
      
      const res = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .maybeSingle()
      
      if (res.error) throw res.error

      if (!res.data) {
        console.warn(`[Auth Store] Profile missing for ${userId}. Attempting self-healing sync...`)
        // Try to recover by creating the profile from auth user metadata
        const { data: { user: authUser } } = await supabase.auth.getUser()
        if (authUser) {
          const { data: newProfile, error: insError } = await supabase
            .from('profiles')
            .insert({
              id: userId,
              full_name: authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || 'User',
              avatar_url: authUser.user_metadata?.avatar_url,
              email: authUser.email,
              role: 'student',
              level: '1',
              department: 'general'
            })
            .select()
            .maybeSingle()
          
          if (!insError && newProfile) {
            console.log('[Auth Store] Profile self-healed successfully.')
            set({ profile: newProfile })
            return
          } else if (insError) {
            console.error('[Auth Store] Self-healing failed:', insError)
          }
        }
      }

      console.log(`[Auth Store] Profile result:`, res.data ? 'Found' : 'Not Found')
      set({ profile: res.data })
    } catch (error) {
      console.error('[Auth Store] Profile fetch failed:', error)
      if (!get().profile) set({ profile: null })
    } finally {
      set({ isProfileLoading: false, _pendingProfileFetch: null })
    }
    })()

    set({ _pendingProfileFetch: { userId, promise } })
    return promise
  },

  /**
   * Sign in with email and password
   */
  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    return data
  },

  /**
   * Sign up with email, password, and display name
   */
  signUp: async (email, password, displayName) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: {
          full_name: displayName,
        },
      },
    })
    if (error) throw error
    return data
  },

  /**
   * Sign out
   */
  signOut: async () => {
    try {
      // 1. First, attempt to sign out from Supabase (server-side)
      // We don't await this immediately to ensure we can clear local state even if it hangs
      const signOutPromise = supabase.auth.signOut()
      
      // 2. Clear local state for immediate UI feedback
      set({
        user: null,
        profile: null,
        session: null,
        isAuthenticated: false,
      })

      const { error } = await signOutPromise
      if (error) {
        console.warn('[Auth] Supabase signOut error (ignoring for local cleanup):', error)
      }
    } catch (error) {
      console.error('[Auth] Critical signOut error:', error)
      // Ensure state is cleared even on crash
      set({
        user: null,
        profile: null,
        session: null,
        isAuthenticated: false,
      })
    }
  },

  /**
   * Reset password
   */
  resetPassword: async (email) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) throw error
  },

  /**
   * Update current user password
   */
  updatePassword: async (newPassword) => {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })
    if (error) throw error
  },

  /**
   * Sign in with Google
   */
  signInWithGoogle: async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    })
    if (error) throw error
  },

  /**
   * Sign in with Magic Link (email OTP)
   */
  signInWithMagicLink: async (email) => {
    console.log(`[Auth Store] Requesting Magic Link for: ${email}`)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin,
        shouldCreateUser: true, // Allow signup via magic link if explicitly wanted
      },
    })
    if (error) throw error
  },




  /**
   * Check if user has admin role
   */
  isAdmin: () => {
    const profile = get().profile
    return profile?.role === 'admin' || profile?.role === 'super_admin'
  },
}))
