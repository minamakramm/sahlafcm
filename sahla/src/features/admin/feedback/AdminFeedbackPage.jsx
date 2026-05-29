import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { AdminTable } from '../components/AdminTable'
import { AdminFormModal } from '../components/AdminFormModal'
import { Button, Badge } from '@/components/ui'
import { ArrowRight } from 'lucide-react'

export default function AdminFeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedFeedback, setSelectedFeedback] = useState(null)

  const fetchFeedbacks = async () => {
    setLoading(true)
    const { data } = await supabase.from('feedback').select('*').order('created_at', { ascending: false })
    if (data) setFeedbacks(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  const handleMarkAsRead = async (id) => {
    await supabase.from('feedback').update({ status: 'archived' }).eq('id', id)
    fetchFeedbacks()
    if (selectedFeedback && selectedFeedback.id === id) setSelectedFeedback(null)
  }

  return (
    <div className="flex flex-col gap-6 animate-slide-up">
      <h1 className="text-3xl font-bold text-white">Feedback Inbox</h1>
      
      {loading ? (
        <div className="glass-tier-1 p-8 text-center text-white/50">Loading feedback...</div>
      ) : (
        <AdminTable headers={['Date', 'Type', 'Subject', 'Status', 'Actions']}>
          {feedbacks.map(fb => (
            <tr key={fb.id} className="hover:bg-white/[0.02]">
              <td className="px-6 py-4 text-sm text-white/80">
                {new Date(fb.created_at).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-sm text-white/80 capitalize">
                {fb.feedback_type}
              </td>
              <td className="px-6 py-4 text-sm text-white/60 truncate max-w-[200px]">
                {fb.subject || 'General'}
              </td>
              <td className="px-6 py-4">
                <Badge variant={fb.status === 'archived' ? 'success' : 'warning'}>
                  {fb.status === 'archived' ? 'Archived' : 'New'}
                </Badge>
              </td>
              <td className="px-6 py-4">
                <Button variant="ghost" size="sm" onClick={() => setSelectedFeedback(fb)}>
                  View <ArrowRight size={14} className="ml-1" />
                </Button>
              </td>
            </tr>
          ))}
          {feedbacks.length === 0 && (
             <tr><td colSpan={5} className="p-8 text-center text-white/50">No feedback found.</td></tr>
          )}
        </AdminTable>
      )}

      {selectedFeedback && (
        <AdminFormModal 
          isOpen={true} 
          onClose={() => setSelectedFeedback(null)} 
          title="Feedback Details"
        >
          <div className="flex flex-col gap-4 text-white/80">
            <div>
              <span className="text-white/50 text-xs uppercase tracking-wider block mb-1">Date</span>
              {new Date(selectedFeedback.created_at).toLocaleString()}
            </div>
            <div>
              <span className="text-white/50 text-xs uppercase tracking-wider block mb-1">Type</span>
              <span className="capitalize">{selectedFeedback.feedback_type}</span>
            </div>
            <div>
              <span className="text-white/50 text-xs uppercase tracking-wider block mb-1">Message</span>
              <div className="bg-white/5 p-4 rounded-xl text-white">{selectedFeedback.message}</div>
            </div>
            {selectedFeedback.status !== 'archived' && (
              <div className="pt-4 flex justify-end">
                 <Button onClick={() => handleMarkAsRead(selectedFeedback.id)}>Mark as Archived</Button>
              </div>
            )}
          </div>
        </AdminFormModal>
      )}
    </div>
  )
}
