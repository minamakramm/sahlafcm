import React from 'react'
import { Modal } from '@/components/ui'

export const AdminFormModal = ({ isOpen, onClose, title, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="md">
      <div className="flex flex-col gap-5">
        {children}
      </div>
    </Modal>
  )
}
