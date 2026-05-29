import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Search, BookOpen, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { searchContent } from '../utils/staticData'

export const SearchBar = () => {
  const { t, i18n } = useTranslation('common')
  const navigate = useNavigate()
  const isRtl = i18n.language === 'ar'
  const fontFamily = isRtl ? 'font-arabic' : 'font-sans'
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const debounceRef = useRef(null)
  const wrapperRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const debouncedSearch = useCallback((value) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(async () => {
      if (value.length < 2) {
        setResults([])
        setIsOpen(false)
        return
      }
      setIsSearching(true)
      try {
        const res = await searchContent(value)
        setResults(res)
        setIsOpen(res.length > 0)
      } catch {
        setResults([])
      } finally {
        setIsSearching(false)
      }
    }, 300)
  }, [])

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
    debouncedSearch(value)
  }

  const handleSelect = (result) => {
    setIsOpen(false)
    setQuery('')
    if (result.type === 'subject') {
      navigate(`/subjects/${result.subject.slug}`)
    } else {
      navigate(`/subjects/${result.subject.slug}/lecture/${result.lecture.number}`)
    }
  }

  return (
    <div ref={wrapperRef} className="relative w-full" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="relative">
        <div className={`absolute top-0 bottom-0 ${isRtl ? 'right-4' : 'left-4'} flex items-center pointer-events-none text-[var(--text-tertiary)]`}>
          <Search size={18} />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder={t('nav.searchPlaceholder', 'Search subjects, lectures…')}
          className={`w-full bg-[var(--active-overlay)] border border-[var(--border-default)] rounded-[14px] ${isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'} py-3 text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none transition-all duration-200 focus:bg-[var(--hover-overlay)] focus:border-[var(--border-focus)] focus:ring-4 focus:ring-[var(--focus-ring)] ${fontFamily}`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 glass-tier-1 rounded-[14px] overflow-hidden"
          >
            <div className="max-h-[300px] overflow-y-auto py-2">
              {results.map((result, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(result)}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--hover-overlay)] transition-colors text-left ${isRtl ? 'text-right' : ''} ${fontFamily}`}
                >
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-secondary-500/10 flex items-center justify-center text-[var(--text-brand)]">
                    {result.type === 'subject' ? <BookOpen size={16} /> : <FileText size={16} />}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium text-[var(--text-primary)] truncate">
                      {result.type === 'subject' ? result.subject.name : result.lecture.title}
                    </span>
                    <span className="text-xs text-[var(--text-tertiary)] truncate">
                      {result.type === 'lecture'
                        ? `${result.subject.name} — Lecture ${result.lecture.number}`
                        : result.subject.code}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
