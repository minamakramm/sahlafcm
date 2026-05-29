import React, { useState } from 'react'
import { Modal, Input, Textarea, Button } from '@/components/ui'

export const FeatureRequestForm = ({ isOpen, onClose, onSubmit, isSubmitting }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return

    const success = await onSubmit(title, description)
    if (success) {
      setTitle('')
      setDescription('')
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Submit a Suggestion" size="md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">Title</label>
          <Input 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            placeholder="E.g. Dark mode toggle" 
            required 
            maxLength={100}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">Description</label>
          <Textarea 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
            placeholder="Please describe your suggestion in detail..." 
            required 
            rows={4}
            maxLength={500}
          />
        </div>

        <div className="flex gap-3 justify-end mt-2">
          <Button type="button" variant="ghost" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" isLoading={isSubmitting}>
            Submit Suggestion
          </Button>
        </div>
      </form>
    </Modal>
  )
}
