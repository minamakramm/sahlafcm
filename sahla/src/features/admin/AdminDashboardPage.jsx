import React, { useEffect, useState } from 'react'
import { Users, FileText, CheckSquare, MessageSquare, TrendingUp } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { getActiveDepartments, getSubjectIndex } from '@/features/home/utils/staticData'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function AdminDashboardPage() {
  const { t } = useTranslation('admin')
  const [stats, setStats] = useState({
    users: 0,
    exams: 0,
    feedbacks: 0,
    lectures: 0,
    visits: 0
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersReq, examsReq, feedbackReq, visitsReq] = await Promise.all([
          supabase.from('profiles').select('*', { count: 'exact', head: true }),
          supabase.from('exam_attempts').select('*', { count: 'exact', head: true }),
          supabase.from('feedback').select('*', { count: 'exact', head: true }),
          supabase.from('analytics_events').select('*', { count: 'exact', head: true }),
        ])

        // Calculate lectures asynchronously from code-split modules
        let lectureCount = 0;
        const activeDepts = getActiveDepartments()
        for (const dept of activeDepts) {
          try {
            const index = await getSubjectIndex(dept.slug)
            index.subjects?.forEach(sub => {
              lectureCount += sub.lectureCount || sub.lectures?.length || 0
            })
          } catch (e) {
            console.warn(`Failed to count lectures for ${dept.slug}`, e)
          }
        }

        const BASE_VISITS = 2908;
        setStats({
          users: usersReq.count || 0,
          exams: examsReq.count || 0,
          feedbacks: feedbackReq.count || 0,
          lectures: lectureCount,
          visits: BASE_VISITS + (visitsReq.count || 0)
        })
      } catch (e) {
        console.error("Error fetching stats:", e)
      }
    }

    fetchStats()

    // ✨ Enable Real-time visits counter
    const channel = supabase
      .channel('realtime_visits')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'analytics_events' }, () => {
        setStats(current => ({ ...current, visits: current.visits + 1 }))
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const statCards = [
    { label: t('dashboard.totalUsers', 'Total Users'), value: stats.users, icon: Users, color: '#a5b4fc', bg: 'rgba(99,102,241,0.1)' },
    { label: t('dashboard.userVisits', 'User Visits'), value: stats.visits, icon: TrendingUp, color: '#818cf8', bg: 'rgba(129,140,248,0.1)' },
    { label: t('dashboard.lecturesAvailable', 'Lectures Available'), value: stats.lectures, icon: FileText, color: '#6ee7b7', bg: 'rgba(16,185,129,0.1)' },
    { label: t('dashboard.examAttempts', 'Exam Attempts'), value: stats.exams, icon: CheckSquare, color: '#c084fc', bg: 'rgba(192,132,252,0.1)' },
  ]

  return (
    <div className="flex flex-col gap-8 animate-slide-up">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white">{t('dashboard.title', 'Overview')}</h1>
        <p className="text-white/60">{t('dashboard.subtitle', 'Welcome to the Sahla admin panel.')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, i) => {
          const Icon = card.icon
          return (
            <div key={i} className="glass-tier-1 p-6 rounded-3xl flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: card.color }} />
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: card.bg }}>
                <Icon size={24} style={{ color: card.color }} />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">{card.value}</div>
                <div className="text-sm font-medium text-white/50">{card.label}</div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Links section or other dashboard elements could go here */}
      <div className="glass-tier-2 p-8 rounded-3xl mt-4">
        <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          <Link to="/admin/analytics" className="px-6 py-3 rounded-xl bg-[rgba(99,102,241,0.1)] hover:bg-[rgba(99,102,241,0.2)] text-[#a5b4fc] transition-colors">
            📊 View Analytics
          </Link>
          <Link to="/admin/users" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors">
            👥 Manage Users
          </Link>
        </div>
      </div>
    </div>
  )
}
