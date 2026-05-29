import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, FileText, ChevronRight } from 'lucide-react';
import { Modal, Badge } from '../ui';
import { searchContent } from '@/features/home/utils/staticData';

export const SearchModal = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);
  
  const isAr = i18n.language === 'ar';
  const fontFamily = isAr ? 'font-arabic' : 'font-sans';

  useEffect(() => {
    if (!isOpen) { setQuery(''); setResults([]); }
    else { setTimeout(() => inputRef.current?.focus(), 100); }
  }, [isOpen]);

  useEffect(() => {
    const performSearch = async () => {
      if (query.trim().length < 2) { setResults([]); return; }
      setIsSearching(true);
      try { setResults(await searchContent(query)); }
      catch (e) { console.error('[SearchModal] Search error:', e); }
      finally { setIsSearching(false); }
    };
    const timer = setTimeout(performSearch, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const handleResultClick = (result) => {
    onClose();
    if (result.type === 'subject') navigate(`/subjects/${result.subject.slug}`);
    else if (result.type === 'lecture') navigate(`/subjects/${result.subject.slug}/lecture/${result.lecture.number}`);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" hideHeader>
      <div className={`flex flex-col gap-4 p-2 ${fontFamily}`} dir={isAr ? 'rtl' : 'ltr'}>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none" style={{ color: 'var(--text-tertiary)' }}>
            <Search size={20} />
          </div>
          <input
            ref={inputRef}
            type="text"
            className="w-full rounded-2xl py-4 ps-12 pe-14 outline-none transition-all text-lg"
            style={{
              background: 'var(--hover-overlay)',
              border: '1px solid var(--border-default)',
              color: 'var(--text-primary)',
            }}
            placeholder={t('search.placeholder', 'Search for subjects, lectures…')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Escape') { e.preventDefault(); onClose(); } }}
            onFocus={(e) => { e.target.style.borderColor = 'var(--border-focus)'; e.target.style.background = 'var(--active-overlay)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--border-default)'; e.target.style.background = 'var(--hover-overlay)'; }}
          />
          <div className="absolute inset-y-0 end-0 flex items-center pe-2 gap-1">
            {query && (
              <button onClick={() => setQuery('')} className="p-2 transition-colors" style={{ color: 'var(--text-tertiary)' }} title="Clear">
                <X size={18} />
              </button>
            )}
            <button onClick={onClose} className="p-2 transition-colors" style={{ color: 'var(--text-tertiary)', borderLeft: '1px solid var(--border-subtle)' }} title="Close Search">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar flex flex-col gap-2 min-h-[100px]">
          {isSearching ? (
             <div className="flex items-center justify-center py-12 gap-3" style={{ color: 'var(--text-tertiary)' }}>
                <div className="w-5 h-5 border-2 border-secondary-500/30 border-t-secondary-500 rounded-full animate-spin" />
                <span>{t('search.searching', 'Searching…')}</span>
             </div>
          ) : query.length >= 2 && results.length === 0 ? (
            <div className="text-center py-12" style={{ color: 'var(--text-tertiary)' }}>
              {t('search.noResults', 'No results found for')}{' '}
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>"{query}"</span>
            </div>
          ) : results.length > 0 ? (
            <div className="flex flex-col gap-1 py-2">
              <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>
                {t('search.matchingResults', 'Results')}
              </div>
              {results.map((res, i) => (
                <button
                  key={`${res.type}-${i}`}
                  onClick={() => handleResultClick(res)}
                  className="flex items-center gap-4 p-3 rounded-2xl transition-all text-start group"
                  style={{ background: 'transparent' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--hover-overlay)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${res.type === 'subject' ? 'bg-secondary-500/10 text-secondary-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                    {res.type === 'subject' ? <BookOpen size={20} /> : <FileText size={20} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium transition-colors truncate" style={{ color: 'var(--text-primary)' }}>
                      {isAr && (res.type === 'subject' ? res.subject.nameAr : res.lecture.titleAr)
                        ? (res.type === 'subject' ? res.subject.nameAr : res.lecture.titleAr)
                        : (res.type === 'subject' ? res.subject.name : res.lecture.title)}
                    </div>
                    <div className="text-xs truncate" style={{ color: 'var(--text-tertiary)' }}>
                      {res.type === 'lecture' ? `${res.subject.name} • ` : ''}
                      {res.departmentSlug}
                    </div>
                  </div>
                  <ChevronRight size={16} className="transition-transform rtl:rotate-180" style={{ color: 'var(--text-disabled)' }} />
                </button>
              ))}
            </div>
          ) : (
             <div className="text-center py-12 italic" style={{ color: 'var(--text-disabled)' }}>
               {t('search.emptyState', 'Type at least 2 characters to search…')}
             </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
