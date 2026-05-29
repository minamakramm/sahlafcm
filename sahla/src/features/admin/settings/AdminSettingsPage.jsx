import React, { useState } from 'react'
import { useSettingsStore } from '@/stores/settingsStore'
import { toast } from 'react-hot-toast'
import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui'
import { AdminFormModal } from '../components/AdminFormModal'

export default function AdminSettingsPage() {
  const { maintenanceMode, setMaintenanceMode } = useSettingsStore()
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleToggle = () => {
    if (!maintenanceMode) {
      setShowConfirm(true) // require confirm to enable
    } else {
      handleConfirm(false) // disable without confirm
    }
  }

  const handleConfirm = async (enabled = true) => {
    setLoading(true)
    try {
      await setMaintenanceMode(enabled)
      toast.success(enabled ? 'Maintenance mode enabled' : 'Maintenance mode disabled')
    } catch (error) {
      toast.error('Failed to update settings')
    } finally {
      setLoading(false)
      setShowConfirm(false)
    }
  }

  return (
    <div className="flex flex-col gap-6 animate-slide-up max-w-2xl">
       <h1 className="text-3xl font-bold text-white">Settings</h1>

       <div className="glass-tier-1 p-6 rounded-3xl flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Maintenance Mode</h3>
            <p className="text-white/60 text-sm max-w-sm">
              Enable to block students from accessing the platform during major database or system upgrades.
            </p>
          </div>
          <div>
            <button
               onClick={handleToggle}
               disabled={loading}
               className={`w-14 h-8 rounded-full transition-all duration-300 relative flex items-center px-1 shadow-inner ${maintenanceMode ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]' : 'bg-white/10 opacity-80 hover:opacity-100'}`}
            >
              <div className={`w-6 h-6 rounded-full bg-white transition-transform duration-300 transform ${maintenanceMode ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>
       </div>

       {showConfirm && (
         <AdminFormModal isOpen={true} onClose={() => setShowConfirm(false)} title="Enable Maintenance Mode">
           <div className="flex flex-col items-center text-center gap-4 py-4">
             <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
               <AlertCircle size={32} />
             </div>
             <p className="text-white text-lg font-medium">Are you absolutely sure?</p>
             <p className="text-white/60">
               This will prevent all students from accessing Sahla until you disable it again. Only administrators will be able to log in.
             </p>
             <div className="flex gap-3 w-full mt-4">
               <Button variant="ghost" className="flex-1" onClick={() => setShowConfirm(false)} disabled={loading}>Cancel</Button>
               <Button variant="danger" className="flex-1" onClick={() => handleConfirm(true)} isLoading={loading}>Enable Mode</Button>
             </div>
           </div>
         </AdminFormModal>
       )}
    </div>
  )
}
