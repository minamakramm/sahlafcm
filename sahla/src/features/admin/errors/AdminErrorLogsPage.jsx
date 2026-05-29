import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { AdminTable } from '../components/AdminTable'
import { Button } from '@/components/ui'
import { AlertCircle, Terminal, Globe, User, Clock, Trash2 } from 'lucide-react'
import { format } from 'date-fns'
import toast from 'react-hot-toast'

export default function AdminErrorLogsPage() {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchLogs = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('error_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50)

    if (data) setLogs(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchLogs()
  }, [])

  const handleClearLogs = async () => {
    if (!window.confirm('Are you sure you want to clear all error logs?')) return
    
    try {
      const { error } = await supabase.from('error_logs').delete().neq('id', '00000000-0000-0000-0000-000000000000')
      if (error) throw error
      toast.success('Logs cleared')
      setLogs([])
    } catch (err) {
      toast.error('Failed to clear logs')
    }
  }

  return (
    <div className="flex flex-col gap-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-black text-white tracking-tighter">Error Logs</h1>
           <p className="text-white/60">Real-time production error monitoring.</p>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-red-400 hover:bg-red-500/10"
          onClick={handleClearLogs}
          disabled={logs.length === 0}
        >
          <Trash2 size={16} className="mr-2" /> Clear All
        </Button>
      </div>
      
      {loading ? (
        <div className="glass-tier-1 p-8 text-center text-white/50">Loading logs...</div>
      ) : (
        <AdminTable headers={['Timestamp', 'Error Message', 'URL / Environment', 'Details']}>
          {logs.map(log => (
            <tr key={log.id} className="hover:bg-white/[0.02] border-b border-white/[0.03]">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
                  <Clock size={12} />
                  {format(new Date(log.created_at), 'MMM d, HH:mm:ss')}
                </div>
              </td>
              <td className="px-6 py-4 max-w-md">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-red-500">
                    <AlertCircle size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-snug break-words">
                      {log.error_message}
                    </div>
                    {log.stack_trace && (
                      <div className="mt-2 text-[10px] font-mono text-white/20 bg-black/20 p-2 rounded-lg line-clamp-2 hover:line-clamp-none transition-all cursor-help">
                        {log.stack_trace}
                      </div>
                    )}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                 <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[10px] text-accent-400 font-bold uppercase tracking-wider">
                       <Globe size={10} />
                       URL: {log.page_url || 'unknown'}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-white/30 font-medium truncate max-w-[200px]">
                       <Terminal size={10} />
                       {log.user_agent}
                    </div>
                 </div>
              </td>
              <td className="px-6 py-4">
                 <Badge variant="danger" className="text-[9px] uppercase tracking-tighter">Production</Badge>
              </td>
            </tr>
          ))}
          {logs.length === 0 && (
             <tr>
               <td colSpan={4} className="p-12 text-center">
                  <div className="flex flex-col items-center gap-3">
                     <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                        <Terminal size={24} />
                     </div>
                     <p className="text-white/40 font-medium">No severe errors logged recently. Systems are healthy. ✅</p>
                  </div>
               </td>
             </tr>
          )}
        </AdminTable>
      )}
    </div>
  )
}

function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-white/10 text-white',
    danger: 'bg-red-500/20 text-red-400 border border-red-500/20',
    purple: 'bg-purple-500/20 text-purple-400 border border-purple-500/20',
  }
  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
