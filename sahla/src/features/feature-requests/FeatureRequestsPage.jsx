import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Plus } from 'lucide-react'
import { useFeatureRequests } from './hooks/useFeatureRequests'
import { FeatureRequestCard } from './components/FeatureRequestCard'
import { FeatureRequestForm } from './components/FeatureRequestForm'
import { Button } from '@/components/ui'
import { EmptyState } from '@/components/feedback/EmptyState'

export default function FeatureRequestsPage() {
  const { requests, isLoading, submitRequest, voteForRequest } = useFeatureRequests()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (title, description) => {
    setIsSubmitting(true)
    const success = await submitRequest(title, description)
    setIsSubmitting(false)
    return success
  }

  return (
    <>
      <Helmet>
        <title>Feature Requests — Sahla</title>
      </Helmet>
      
      <div className="min-h-screen p-6 pt-24 max-w-4xl mx-auto flex flex-col gap-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-tier-2 p-8 rounded-3xl">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Feature Requests</h1>
            <p className="text-white/60 text-sm max-w-md">
              Help us improve Sahla by suggesting new features or voting on existing ideas from the community.
            </p>
          </div>
          <Button onClick={() => setIsFormOpen(true)} className="flex-shrink-0 shadow-lg" id="submit-suggestion-btn">
            <Plus size={18} className="mr-2" />
            Submit a Suggestion
          </Button>
        </div>

        {isLoading && requests.length === 0 ? (
          <div className="glass-tier-1 p-8 text-center text-white/40 rounded-3xl">Loading requests...</div>
        ) : requests.length === 0 ? (
          <EmptyState 
            icon="Lightbulb" 
            title="No suggestions yet" 
            description="Be the first to suggest a new feature!" 
          />
        ) : (
          <div className="flex flex-col gap-4">
            {requests.map(request => (
              <FeatureRequestCard 
                key={request.id} 
                request={request} 
                onVote={voteForRequest} 
              />
            ))}
          </div>
        )}

        <FeatureRequestForm 
          isOpen={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
          onSubmit={handleSubmit} 
          isSubmitting={isSubmitting} 
        />
        
      </div>
    </>
  )
}
