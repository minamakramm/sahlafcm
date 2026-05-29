import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { AdminTable } from '../components/AdminTable'
import { AdminFormModal } from '../components/AdminFormModal'
import { UserRoleForm } from './UserRoleForm'
import { Button, Badge, Input } from '@/components/ui'
import { Link } from 'react-router-dom'

export default function AdminUsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const fetchUsers = async () => {
    setLoading(true)
    let q = supabase.from('profiles').select('*').order('created_at', { ascending: false })
    
    if (searchQuery) {
      q = q.ilike('full_name', `%${searchQuery}%`)
    }
    
    const { data } = await q
    if (data) setUsers(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [searchQuery])

  const handleUpdateRole = async (userId, newRole) => {
    await supabase.from('profiles').update({ role: newRole }).eq('id', userId)
    setSelectedUser(null)
    fetchUsers()
  }

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) return
    
    // Note: This deletes the user's profile. Full account deletion typically requires 
    // a server-side Supabase Admin API call, but this will remove them from the platform UI.
    const { error } = await supabase.from('profiles').delete().eq('id', userId)
    if (error) {
      alert('Failed to delete user: ' + error.message)
    } else {
      fetchUsers()
    }
  }

  return (
    <div className="flex flex-col gap-6 animate-slide-up">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-black text-white tracking-tighter">Users</h1>
        <div className="w-full max-w-xs">
           <Input 
             placeholder="Search by name..." 
             value={searchQuery}
             onChange={e => setSearchQuery(e.target.value)}
           />
        </div>
      </div>
      
      {loading ? (
        <div className="glass-tier-1 p-8 text-center text-white/50">Loading users...</div>
      ) : (
        <AdminTable headers={['Name', 'XP & Level', 'Role', 'Last Active', 'Joined', 'Actions']}>
          {users.map(u => (
            <tr key={u.id} className="hover:bg-white/[0.02] border-b border-white/[0.03]">
              <td className="px-6 py-4">
                 <Link to={`/admin/users/${u.id}`} className="group block">
                   <div className="text-sm text-white font-bold group-hover:text-secondary-400 transition-colors">
                     {u.full_name || 'Anonymous'}
                   </div>
                   <div className="text-[10px] text-white/20 font-mono">
                     {u.id.substring(0, 8)}...
                   </div>
                 </Link>
              </td>
              <td className="px-6 py-4">
                 <div className="flex flex-col">
                   <span className="text-sm text-accent-400 font-black italic">{u.xp?.toLocaleString() || 0} XP</span>
                   <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Lvl {u.level || 1}</span>
                 </div>
              </td>
              <td className="px-6 py-4">
                <Badge variant={u.role === 'admin' ? 'purple' : 'default'} className="lowercase text-[10px]">
                  {u.role || 'student'}
                </Badge>
              </td>
              <td className="px-6 py-4 text-xs text-white/40 font-medium">
                {u.updated_at ? new Date(u.updated_at).toLocaleDateString() : '—'}
              </td>
              <td className="px-6 py-4 text-xs text-white/40 font-medium">
                {new Date(u.created_at).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">
                 <div className="flex gap-2">
                    <Link to={`/admin/users/${u.id}`}>
                       <Button variant="ghost" size="sm" className="h-8 text-xs">View</Button>
                    </Link>
                    <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={() => setSelectedUser(u)}>
                      Role
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 text-xs text-red-400 hover:text-red-300 hover:bg-red-400/10" onClick={() => handleDeleteUser(u.id)}>
                      Delete
                    </Button>
                 </div>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
             <tr><td colSpan={6} className="p-8 text-center text-white/50">No users found.</td></tr>
          )}
        </AdminTable>
      )}

      {selectedUser && (
        <AdminFormModal 
          isOpen={true} 
          onClose={() => setSelectedUser(null)} 
          title="Manage User"
        >
          <UserRoleForm 
            user={selectedUser} 
            onClose={() => setSelectedUser(null)}
            onSave={handleUpdateRole}
          />
        </AdminFormModal>
      )}
    </div>
  )
}
