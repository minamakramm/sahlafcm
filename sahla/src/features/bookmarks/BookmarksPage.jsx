import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { BookmarkList } from './components/BookmarkList'
import { useBookmarks } from './hooks/useBookmarks'
import { supabase } from '@/lib/supabase'
import { EmptyState } from '@/components/feedback/EmptyState'
import toast from 'react-hot-toast'
import { Bookmark } from 'lucide-react'
import {
  getSubjectBySlug,
  getActiveDepartments,
} from '@/features/home/utils/staticData'

export default function BookmarksPage() {
  const { t } = useTranslation('common')
  const { bookmarks, isLoading, refetch } = useBookmarks()
  const [enrichedBookmarks, setEnrichedBookmarks] = useState([])
  
  useEffect(() => {
    let cancelled = false

    const enrichBookmarks = async () => {
      if (!bookmarks || !bookmarks.length) {
        setEnrichedBookmarks([])
        return
      }

      const activeDepts = getActiveDepartments()
      const enriched = []

      for (const bm of bookmarks) {
        let subject = null
        for (const dept of activeDepts) {
          try {
            const found = await getSubjectBySlug(dept.slug, bm.subject_id)
            if (found) {
              subject = found
              break
            }
          } catch (err) {
            // ignore
          }
        }
        enriched.push({ ...bm, subject })
      }

      if (!cancelled) {
        setEnrichedBookmarks(enriched)
      }
    }

    enrichBookmarks()
    return () => { cancelled = true }
  }, [bookmarks])

  const handleRemove = async (bookmark) => {
    // Optimistic remove
    setEnrichedBookmarks(prev => (prev || []).filter(b => b.id !== bookmark.id))
    
    // Toast with undo
    toast((tst) => (
      <div className="flex items-center gap-4">
        <span>Bookmark removed</span>
        <button 
          onClick={async () => {
            toast.dismiss(tst.id)
            // Restore locally
            setEnrichedBookmarks(prev => [
              ...prev, 
              bookmark
            ].sort((a,b) => new Date(b.created_at) - new Date(a.created_at)))
            
            // Re-insert to Supabase (undo)
            await supabase.from('bookmarks').insert({
              user_id: bookmark.user_id,
              subject_id: bookmark.subject_id,
              lecture_number: bookmark.lecture_number,
              bookmark_type: bookmark.bookmark_type,
            })
            refetch()
          }}
          className="text-[#a5b4fc] text-sm font-medium hover:underline"
        >
          Undo
        </button>
      </div>
    ), { duration: 4000 })

    // Actually delete
    const { error } = await supabase
      .from('bookmarks')
      .delete()
      .eq('id', bookmark.id)
      
    if (error) {
       toast.error('Failed to remove bookmark')
       refetch()
    }
  }

  return (
    <>
      <Helmet>
        <title>{t('bookmarks.title', 'Bookmarks')} — Sahla</title>
      </Helmet>
      <div className="min-h-screen p-4 pt-4 md:p-6 md:pt-24">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-3xl font-bold text-white mb-2">{t('bookmarks.title', 'Bookmarks')}</h1>
          <p className="text-white/50 mb-8">{t('bookmarks.subtitle', 'Your saved lectures and resources')}</p>
          
          {isLoading ? (
            <div className="glass-tier-1 p-8 text-center text-white/40">Loading bookmarks...</div>
          ) : enrichedBookmarks.length === 0 ? (
           <EmptyState 
             icon={Bookmark} 
             title="No saved lectures yet" 
             description="Start bookmarking lectures to find them here!" 
           />
          ) : (
            <BookmarkList bookmarks={enrichedBookmarks} onRemove={handleRemove} />
          )}
        </div>
      </div>
    </>
  )
}
