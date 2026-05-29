import React from 'react'
import { useTranslation } from 'react-i18next'
import { Modal, Button } from '@/components/ui'
import { AlertCircle } from 'lucide-react'

export const ExamSubmitModal = ({ unansweredCount, onConfirm, onCancel, isSubmitting }) => {
  const { t } = useTranslation('exam')

  return (
    <Modal isOpen={true} onClose={onCancel} title={t('confirmSubmit.title', 'Submit Exam?')} size="sm">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 text-center">
          {unansweredCount > 0 ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                <AlertCircle size={24} />
              </div>
              <p className="text-white/90">
                {t('confirmSubmit.unansweredWarning', 'You have {{count}} unanswered questions.', { count: unansweredCount })}
              </p>
              <p className="text-white/60 text-sm">
                {t('confirmSubmit.areYouSure', 'Are you sure you want to submit anyway?')}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <p className="text-white/90">
                {t('confirmSubmit.allAnswered', 'You have answered all questions.')}
              </p>
              <p className="text-white/60 text-sm">
                {t('confirmSubmit.readyToSubmit', 'Ready to submit your exam?')}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 w-full">
          <Button variant="ghost" className="flex-1" onClick={onCancel} disabled={isSubmitting}>
            {t('confirmSubmit.goBack', 'Go back')}
          </Button>
          <Button 
            className="flex-1" 
            variant={unansweredCount > 0 ? "primary" : "success"}
            onClick={onConfirm} 
            isLoading={isSubmitting}
          >
            {t('confirmSubmit.yesSubmit', 'Yes, submit')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
