import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSettingsStore } from '@/stores/settingsStore'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'

export default function AdminSettings() {
  const { t } = useTranslation('admin')
  const maintenanceMode = useSettingsStore((s) => s.maintenanceMode)
  const setMaintenanceMode = useSettingsStore((s) => s.setMaintenanceMode)
  const [saving, setSaving] = useState(false)

  const handleToggleMaintenance = async () => {
    const newValue = !maintenanceMode
    setSaving(true)
    try {
      const { error } = await supabase
        .from('settings')
        .upsert({ key: 'maintenance_mode', value: String(newValue) })

      if (error) throw error

      setMaintenanceMode(newValue)
      toast.success(t('settings.settingsSaved'))
    } catch (err) {
      console.error('[Settings] Save error:', err)
      toast.error(t('settings.settingsError'))
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="animate-slide-up">
      <h1 className="text-2xl font-bold text-white mb-6">{t('settings.title')}</h1>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-white">{t('settings.maintenance')}</h3>
            <p className="text-sm text-white/50 mt-1">{t('settings.maintenanceDescription')}</p>
            <p className={`text-sm mt-2 font-medium ${maintenanceMode ? 'text-amber-400' : 'text-emerald-400'}`}>
              {maintenanceMode ? t('settings.maintenanceEnabled') : t('settings.maintenanceDisabled')}
            </p>
          </div>

          <button
            onClick={handleToggleMaintenance}
            disabled={saving}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              maintenanceMode ? 'bg-amber-500' : 'bg-glass-400'
            } ${saving ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                maintenanceMode ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
