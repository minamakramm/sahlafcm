import { create } from 'zustand'
import { supabase } from '@/lib/supabase'

export const useSettingsStore = create((set) => ({
  // State
  maintenanceMode: false,
  isLoaded: false,

  // Actions
  /**
   * Fetch settings from Supabase 'settings' table on boot.
   * Falls back to safe defaults if fetch fails.
   */
  fetchSettings: async () => {
    try {
      const { data, error } = await supabase
        .from('settings')
        .select('key, value')

      if (error) throw error

      const settings = {}
      data?.forEach((row) => {
        settings[row.key] = row.value
      })

      set({
        maintenanceMode: settings.maintenance_mode === 'true' || settings.maintenance_mode === true,
        isLoaded: true,
      })
    } catch (error) {
      console.error('[Settings] Fetch error:', error)
      set({ isLoaded: true }) // Still mark as loaded so app doesn't hang
    }
  },

  /**
   * Subscribe to real-time settings changes
   */
  subscribeToChanges: () => {
    const channel = supabase
      .channel(`settings-[${Date.now()}-${Math.random()}]`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'settings',
        },
        (payload) => {
          const { key, value } = payload.new || {}
          if (key === 'maintenance_mode') {
            set({ maintenanceMode: value === 'true' || value === true })
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  },

  setMaintenanceMode: async (enabled) => {
    try {
      const { error } = await supabase
        .from('settings')
        .update({ value: enabled ? 'true' : 'false' })
        .eq('key', 'maintenance_mode')

      if (error) throw error
      set({ maintenanceMode: enabled })
    } catch (error) {
      console.error('[Settings] Update error:', error)
      throw error
    }
  },

  updateSetting: async (key, value) => {
    try {
      const { error } = await supabase
        .from('settings')
        .update({ value: String(value) })
        .eq('key', key)

      if (error) throw error
    } catch (error) {
      console.error('[Settings] Update error:', error)
      throw error
    }
  },
}))
