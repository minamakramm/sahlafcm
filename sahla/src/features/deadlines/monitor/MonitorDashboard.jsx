// ============================================
// Sahla — MonitorDashboard Component
// Monitor's control panel — stats, table, flagged panel
// ============================================

import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, CalendarClock, Clock, AlertTriangle, CheckCircle2, Calendar, Search, SlidersHorizontal } from 'lucide-react'
import { Modal } from '@/components/ui'
import DeadlineForm from './DeadlineForm'
import DeadlineTable from './DeadlineTable'
import DeadlineHistoryDrawer from './DeadlineHistoryDrawer'
import FlaggedReviewPanel from './FlaggedReviewPanel'
import { useDeadlines, useDeleteDeadline, useMarkDeadlineDone } from '../hooks/useDeadlines'
import { useDeadlineRealtime } from '../hooks/useDeadlineRealtime'
import { useMonitorAccess } from '../hooks/useMonitorAccess'
import { useAnalytics } from '@/hooks/useAnalytics'
import { DEADLINE_TYPES, DEADLINE_STATUSES } from '../lib/deadlineValidators'
import toast from 'react-hot-toast'

export default function MonitorDashboard() {
  const { t, i18n } = useTranslation('deadlines')
  const { track } = useAnalytics()
  const isRtl = i18n.language === 'ar'
  const fontClass = isRtl ? 'font-arabic' : 'font-sans'

  const { isMonitor, isAdmin } = useMonitorAccess()

  // State
  const [showForm, setShowForm] = useState(false)
  const [editingDeadline, setEditingDeadline] = useState(null)
  const [historyDeadlineId, setHistoryDeadlineId] = useState(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null)
  const [typeFilter, setTypeFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Data
  const { data: deadlines = [], isLoading } = useDeadlines()
  useDeadlineRealtime()

  // Auto-reopen form if draft exists
  useEffect(() => {
    const draft = localStorage.getItem('deadline_form_draft')
    if (draft) {
      try {
        const parsed = JSON.parse(draft)
        // Only reopen if there's significant content (title or description or subject)
        if (parsed.title || parsed.description || parsed.subject_id || parsed.subject_name_override) {
          setShowForm(true)
        }
      } catch (e) {}
    }
  }, [])

  const deleteMutation = useDeleteDeadline()
  const markDoneMutation = useMarkDeadlineDone()

  // Compute stats
  const stats = useMemo(() => {
    const s = { upcoming: 0, today: 0, tomorrow: 0, overdue: 0, done: 0 }
    deadlines.forEach(d => { s[d.status] = (s[d.status] || 0) + 1 })
    return s
  }, [deadlines])

  // Flagged deadlines
  const flaggedDeadlines = useMemo(() => {
    return deadlines.filter(d =>
      (d.reactions || []).some(r => r.type === 'flagged')
    )
  }, [deadlines])

  // Filtered deadlines
  const filtered = useMemo(() => {
    let result = [...deadlines]
    if (typeFilter !== 'all') result = result.filter(d => d.type === typeFilter)
    if (statusFilter !== 'all') result = result.filter(d => d.status === statusFilter)
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(d =>
        d.title?.toLowerCase().includes(q) ||
        d.subject_name_override?.toLowerCase().includes(q)
      )
    }
    return result
  }, [deadlines, typeFilter, statusFilter, searchQuery])

  // Handlers
  const handleEdit = useCallback((deadline) => {
    setEditingDeadline(deadline)
    setShowForm(true)
  }, [])

  const handleDelete = useCallback(async (deadline) => {
    setShowDeleteConfirm(deadline)
  }, [])

  const confirmDelete = useCallback(async () => {
    if (!showDeleteConfirm) return
    try {
      await deleteMutation.mutateAsync(showDeleteConfirm.id)
      track('monitor_deadline_deleted', { entity_id: showDeleteConfirm.id })
      toast.success(t('monitor.deleted_success'))
    } catch {
      toast.error(t('monitor.error_generic'))
    }
    setShowDeleteConfirm(null)
  }, [showDeleteConfirm, deleteMutation, track, t])

  const handleMarkDone = useCallback(async (id) => {
    try {
      await markDoneMutation.mutateAsync(id)
      toast.success(t('monitor.mark_done'))
    } catch {
      toast.error(t('monitor.error_generic'))
    }
  }, [markDoneMutation, t])

  const handleCloseForm = useCallback(() => {
    setShowForm(false)
    setEditingDeadline(null)
  }, [])

  const statCards = [
    { key: 'upcoming', label: t('status.upcoming'), count: stats.upcoming, icon: Calendar, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { key: 'today', label: t('status.today'), count: stats.today, icon: Clock, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    { key: 'overdue', label: t('status.overdue'), count: stats.overdue, icon: AlertTriangle, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
    { key: 'done', label: t('status.done'), count: stats.done, icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  ]

  return (
    <>
      <Helmet>
        <title>{t('monitor.dashboard')} — Sahla</title>
      </Helmet>

      <div className={`container-fluid py-8 ${fontClass}`} dir={isRtl ? 'rtl' : 'ltr'}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8 flex-wrap gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-accent-500/10 border border-accent-500/20">
              <CalendarClock size={22} className="text-accent-400" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white">{t('monitor.dashboard')}</h1>
              <p className="text-white/40 text-sm">{t('subtitle')}</p>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ y: -1 }}
            onClick={() => { setEditingDeadline(null); setShowForm(true) }}
            className="h-11 px-6 rounded-2xl bg-accent-500 text-white font-bold text-sm transition-all hover:bg-accent-600 shadow-[0_4px_20px_rgba(139,92,246,0.3)] border border-white/10 flex items-center gap-2"
          >
            <Plus size={16} />
            {t('add')}
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
        >
          {statCards.map((stat, idx) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              onClick={() => setStatusFilter(statusFilter === stat.key ? 'all' : stat.key)}
              className={`glass-tier-1 p-4 cursor-pointer transition-all duration-200 hover:bg-white/[0.08] ${
                statusFilter === stat.key ? 'ring-2 ring-accent-500/20 border-accent-500/30' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`p-1.5 rounded-lg ${stat.bg} border ${stat.border}`}>
                  <stat.icon size={14} className={stat.color} />
                </div>
              </div>
              <p className={`text-2xl font-black ${stat.color} tabular-nums`}>{stat.count}</p>
              <p className="text-xs text-white/40 font-medium mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Filters row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-4 flex-wrap"
        >
          {/* Type filter */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={14} className="text-white/30" />
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2 text-sm text-white/70 focus:outline-none focus:border-accent-500/30 [color-scheme:dark]"
            >
              <option value="all">{t('types.all')}</option>
              {DEADLINE_TYPES.map(type => (
                <option key={type} value={type}>{t(`types.${type}`)}</option>
              ))}
            </select>
          </div>

          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2 text-sm text-white/70 focus:outline-none focus:border-accent-500/30 [color-scheme:dark]"
          >
            <option value="all">{t('filter_all')}</option>
            {DEADLINE_STATUSES.map(s => (
              <option key={s} value={s}>{t(`status.${s}`)}</option>
            ))}
          </select>

          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Search size={14} className={`absolute top-1/2 -translate-y-1/2 text-white/30 ${isRtl ? 'right-3' : 'left-3'}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('search_placeholder')}
              className={`w-full bg-white/[0.03] border border-white/10 rounded-xl py-2 text-sm text-white placeholder-white/30 focus:border-accent-500/30 focus:outline-none transition-all ${
                isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'
              }`}
            />
          </div>
        </motion.div>

        {/* Flagged panel */}
        {flaggedDeadlines.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mb-6"
          >
            <FlaggedReviewPanel
              flaggedDeadlines={flaggedDeadlines}
              onDismiss={(id) => console.log('Dismiss flag for', id)}
              onEdit={handleEdit}
            />
          </motion.div>
        )}

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {isLoading ? (
            <div className="glass-tier-1 p-8 text-center">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-glass-400 border-t-accent-500 mx-auto" />
              <p className="text-white/30 text-sm mt-4">{t('loading')}</p>
            </div>
          ) : (
            <DeadlineTable
              deadlines={filtered}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onMarkDone={handleMarkDone}
              onViewHistory={setHistoryDeadlineId}
            />
          )}
        </motion.div>
      </div>

      {/* Create / Edit Modal */}
      <Modal isOpen={showForm} onClose={handleCloseForm}>
        <DeadlineForm
          deadline={editingDeadline}
          onClose={handleCloseForm}
        />
      </Modal>

      {/* History Drawer */}
      <DeadlineHistoryDrawer
        deadlineId={historyDeadlineId}
        isOpen={!!historyDeadlineId}
        onClose={() => setHistoryDeadlineId(null)}
      />

      {/* Delete Confirm Modal */}
      <Modal isOpen={!!showDeleteConfirm} onClose={() => setShowDeleteConfirm(null)}>
        <div className={`text-center ${fontClass}`} dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="mx-auto w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
            <AlertTriangle size={24} className="text-red-400" />
          </div>
          <h3 className="text-lg font-black text-white mb-2">{t('delete')}?</h3>
          <p className="text-white/40 text-sm mb-6">{t('monitor.confirm_delete')}</p>
          <div className="flex items-center gap-3 justify-center">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={confirmDelete}
              disabled={deleteMutation.isPending}
              className="h-10 px-6 rounded-2xl bg-red-500/20 text-red-400 font-bold text-sm border border-red-500/30 hover:bg-red-500/30 transition-all"
            >
              {t('delete')}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowDeleteConfirm(null)}
              className="h-10 px-6 rounded-2xl bg-white/5 text-white/60 font-bold text-sm border border-white/10 hover:bg-white/10 transition-all"
            >
              {t('cancel')}
            </motion.button>
          </div>
        </div>
      </Modal>
    </>
  )
}
