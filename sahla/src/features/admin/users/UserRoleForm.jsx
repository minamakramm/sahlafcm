import React, { useState } from 'react'
import { Button, Select } from '@/components/ui'

export const UserRoleForm = ({ user, onClose, onSave }) => {
  const [role, setRole] = useState(user?.role || 'student')

  const handleSubmit = () => {
    onSave(user.id, role)
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="block text-sm text-white/50 mb-2 uppercase tracking-wider">Change Role For</label>
        <div className="text-white font-medium">{user.full_name || 'Unknown User'}</div>
        <div className="text-white/60 text-sm">{user.email || user.id}</div>
      </div>
      
      <div>
        <label className="block text-sm text-white/50 mb-2 uppercase tracking-wider">New Role</label>
        <Select 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
          options={[
            { value: 'student', label: 'Student' },
            { value: 'admin', label: 'Admin' }
          ]}
        />
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <Button variant="ghost" onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Save Role</Button>
      </div>
    </div>
  )
}
