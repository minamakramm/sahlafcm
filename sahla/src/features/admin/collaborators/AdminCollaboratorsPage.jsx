import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { AdminTable } from '../components/AdminTable'
import { AdminFormModal } from '../components/AdminFormModal'
import { Button, Badge } from '@/components/ui'
import { ArrowRight, Phone, User, MessageSquare, Briefcase, Building2 } from 'lucide-react'

export default function AdminCollaboratorsPage() {
  const [collaborators, setCollaborators] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCollaborator, setSelectedCollaborator] = useState(null)

  const fetchCollaborators = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('collaborators')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (data) setCollaborators(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchCollaborators()
  }, [])

  const handleArchive = async (id) => {
    await supabase.from('collaborators').update({ status: 'archived' }).eq('id', id)
    fetchCollaborators()
    if (selectedCollaborator && selectedCollaborator.id === id) setSelectedCollaborator(null)
  }

  return (
    <div className="flex flex-col gap-6 animate-slide-up">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Collaborators Proposals</h1>
          <p className="text-white/50 text-sm">Review applications from people who want to help Sahla.</p>
        </div>
      </div>
      
      {loading ? (
        <div className="glass-tier-1 p-8 text-center text-white/50">Loading proposals...</div>
      ) : (
        <AdminTable headers={['Date', 'Name', 'Role', 'WhatsApp', 'Status', 'Actions']}>
          {collaborators.map(collab => (
            <tr key={collab.id} className="hover:bg-white/[0.02]">
              <td className="px-6 py-4 text-sm text-white/80">
                {new Date(collab.created_at).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-sm font-bold text-white">
                {collab.name}
              </td>
              <td className="px-6 py-4 text-sm text-indigo-400 capitalize">
                {collab.role}
              </td>
              <td className="px-6 py-4 text-sm text-white/60">
                {collab.whatsapp}
              </td>
              <td className="px-6 py-4">
                <Badge variant={collab.status === 'archived' ? 'success' : 'warning'}>
                  {collab.status === 'archived' ? 'Reviewed' : 'New'}
                </Badge>
              </td>
              <td className="px-6 py-4">
                <Button variant="ghost" size="sm" onClick={() => setSelectedCollaborator(collab)}>
                  Details <ArrowRight size={14} className="ml-1" />
                </Button>
              </td>
            </tr>
          ))}
          {collaborators.length === 0 && (
             <tr><td colSpan={6} className="p-8 text-center text-white/50">No proposals found.</td></tr>
          )}
        </AdminTable>
      )}

      {selectedCollaborator && (
        <AdminFormModal 
          isOpen={true} 
          onClose={() => setSelectedCollaborator(null)} 
          title="Collaborator Proposal Details"
        >
          <div className="flex flex-col gap-6 text-white/80">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <User size={10} /> Name
                </span>
                <span className="text-white font-bold">{selectedCollaborator.name}</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <Phone size={10} /> WhatsApp
                </span>
                <a 
                  href={`https://wa.me/${selectedCollaborator.whatsapp.replace(/\D/g,'')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-bold hover:underline"
                >
                  {selectedCollaborator.whatsapp}
                </a>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <Briefcase size={10} /> Role
                </span>
                <span className="text-indigo-400 font-bold capitalize">{selectedCollaborator.role}</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <Building2 size={10} /> Department
                </span>
                <span className="text-white/80 font-bold uppercase">{selectedCollaborator.department}</span>
              </div>
            </div>

            <div>
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider block mb-2 flex items-center gap-1">
                <MessageSquare size={10} /> Message
              </span>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-white/90 leading-relaxed">
                {selectedCollaborator.message}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-white/5">
              <span className="text-white/30 text-[10px]">
                Received on {new Date(selectedCollaborator.created_at).toLocaleString()}
              </span>
              {selectedCollaborator.status !== 'archived' && (
                <Button onClick={() => handleArchive(selectedCollaborator.id)}>
                  Mark as Reviewed
                </Button>
              )}
            </div>
          </div>
        </AdminFormModal>
      )}
    </div>
  )
}
