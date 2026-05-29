import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { AdminTable } from '../components/AdminTable'
import { Button, Badge } from '@/components/ui'
import toast from 'react-hot-toast'

export default function AdminFeatureRequestsPage() {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchRequests = async () => {
    setLoading(true)
    const { data } = await supabase.from('feature_requests').select('*').order('votes', { ascending: false })
    if (data) setRequests(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchRequests()
  }, [])

  const handleUpdateStatus = async (id, status, userId, title) => {
    const { error } = await supabase
      .from('feature_requests')
      .update({ status })
      .eq('id', id);

    if (error) {
      console.error('[Admin] Update status error:', error);
      toast.error('Failed to update: ' + error.message);
    } else {
      toast.success(`Request marked as ${status}`);
      fetchRequests();

      // Send a targeted notification to the user who submitted the request
      if (userId) {
        const notifTitle = status === 'completed' 
          ? 'Suggestion Implemented! 🎉' 
          : 'Suggestion Planned 📅';
        
        const notifMessage = status === 'completed'
          ? `Great news! Your feature request "${title}" has been implemented. Thank you for helping improve Sahla!`
          : `Good news! Your feature request "${title}" has been added to our roadmap.`;

        await supabase.from('notifications').insert([{
          title: notifTitle,
          message: notifMessage,
          target_user_id: userId,
          type: 'system',
          is_active: true
        }]);
      }
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-slide-up">
      <h1 className="text-3xl font-bold text-white">Feature Requests</h1>
      
      {loading ? (
        <div className="glass-tier-1 p-8 text-center text-white/50">Loading requests...</div>
      ) : (
        <AdminTable headers={['Title', 'Votes', 'Date', 'Status', 'Actions']}>
          {requests.map(req => (
            <tr key={req.id} className="hover:bg-white/[0.02]">
              <td className="px-6 py-4 text-sm text-white/80 font-medium truncate max-w-[200px]" title={req.title}>
                {req.title}
              </td>
              <td className="px-6 py-4 text-sm text-[#a5b4fc] font-bold">
                {req.votes}
              </td>
              <td className="px-6 py-4 text-sm text-white/50">
                {new Date(req.created_at).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">
                <Badge variant={req.status === 'completed' ? 'success' : (req.status === 'planned' ? 'warning' : 'default')}>
                  {req.status || 'pending'}
                </Badge>
              </td>
              <td className="px-6 py-4 flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => handleUpdateStatus(req.id, 'planned', req.user_id, req.title)}>Plan</Button>
                <Button variant="ghost" size="sm" onClick={() => handleUpdateStatus(req.id, 'completed', req.user_id, req.title)}>Done</Button>
              </td>
            </tr>
          ))}
          {requests.length === 0 && (
             <tr><td colSpan={5} className="p-8 text-center text-white/50">No feature requests found.</td></tr>
          )}
        </AdminTable>
      )}
    </div>
  )
}
