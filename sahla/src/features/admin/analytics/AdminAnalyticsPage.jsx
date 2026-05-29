import React, { useEffect, useState, useMemo } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell
} from 'recharts'
import { supabase } from '@/lib/supabase'
import { AdminAnalyticsSection } from './AdminAnalyticsSection'

const COLORS = ['#818cf8', '#34d399', '#fbbf24', '#f87171', '#c084fc']

export default function AdminAnalyticsPage() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      // In production, aggregate on backend. For this local demo, fetching recent 1000.
      const { data } = await supabase.from('analytics_events').select('*').limit(1000).order('created_at', { ascending: false })
      if (data) setEvents(data)
      setLoading(false)
    }
    fetchEvents()
  }, [])

  // 1. Most accessed subjects
  const subjectAccessCount = useMemo(() => {
    const list = (events || []).filter(e => e.event_type === 'subject_open')
    const counts = {}
    list.forEach(e => {
      const sub = e.event_data?.subjectName || e.event_data?.subjectSlug || 'Unknown'
      counts[sub] = (counts[sub] || 0) + 1
    })
    const result = Object.keys(counts).map(k => ({ name: k, accesses: counts[k] })).sort((a,b) => b.accesses - a.accesses).slice(0, 5)
    return result.length ? result : [{ name: 'No Data Yet', accesses: 0 }]
  }, [events])

  // 2. Exam submissions per subject
  const examSubmissions = useMemo(() => {
    const list = (events || []).filter(e => e.event_type === 'exam_submit')
    const counts = {}
    list.forEach(e => {
      const sub = e.event_data?.subjectSlug || 'Unknown'
      counts[sub] = (counts[sub] || 0) + 1
    })
    const result = Object.keys(counts).map(k => ({ name: k, submissions: counts[k] }))
    return result.length ? result : [{ name: 'No Exams Yet', submissions: 0 }]
  }, [events])

  // 3. Tab usage
  const tabUsage = useMemo(() => {
    const list = (events || []).filter(e => e.event_type === 'lecture_tab_switch')
    const counts = {}
    list.forEach(e => {
      const tab = e.event_data?.tab || 'Unknown'
      counts[tab] = (counts[tab] || 0) + 1
    })
    const data = Object.keys(counts).map(k => ({ name: k, value: counts[k] }))
    return data.length ? data : [
      { name: 'explanation', value: 1 }, { name: 'summary', value: 0 },
      { name: 'mcq', value: 0 }, { name: 'written', value: 0 }
    ]
  }, [events])

  // 4. Daily Active Users (Real grouping by day)
  const dauData = useMemo(() => {
    const countsByDay = {}
    // Initialize last 7 days with 0
    for(let i=6; i>=0; i--) {
      const d = new Date()
      d.setDate(d.getDate() - i)
      const dayKey = d.toISOString().split('T')[0]
      countsByDay[dayKey] = new Set()
    }

    events.forEach(e => {
      const dayKey = new Date(e.created_at).toISOString().split('T')[0]
      if (countsByDay[dayKey]) {
        countsByDay[dayKey].add(e.session_id || e.user_id)
      }
    })

    return Object.keys(countsByDay).sort().map(day => ({
      date: new Date(day).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      users: countsByDay[day].size
    }))
  }, [events])

  return (
    <div className="flex flex-col gap-8 animate-slide-up">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">System Analytics</h1>
      </div>

      {/* Render the advanced analytics section from the local folder */}
      <AdminAnalyticsSection />

      <h2 className="text-2xl font-bold text-white mt-12 mb-2 border-t border-white/5 pt-8">Application Events</h2>

      {loading ? (
         <div className="p-8 text-white/50 text-center">Loading platform events...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Subjects Access Bar */}
          <div className="glass-tier-1 p-6 rounded-3xl flex flex-col gap-4 h-[350px]">
            <h2 className="text-lg font-bold text-white">Most Accessed Subjects</h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectAccessCount}>
                <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{ backgroundColor: '#1e1e2e', border: 'none', borderRadius: '12px' }} />
                <Bar dataKey="accesses" fill="#818cf8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Tab Usage Pie */}
          <div className="glass-tier-1 p-6 rounded-3xl flex flex-col gap-4 h-[350px]">
            <h2 className="text-lg font-bold text-white">Lecture Tab Usage</h2>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={tabUsage}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {tabUsage.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1e1e2e', border: 'none', borderRadius: '12px', color: 'white' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Daily Active Users Area */}
          <div className="glass-tier-1 p-6 rounded-3xl flex flex-col gap-4 lg:col-span-2 h-[350px]">
            <h2 className="text-lg font-bold text-white">Daily Active Users (Last 30 Days)</h2>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dauData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#1e1e2e', border: 'none', borderRadius: '12px' }} />
                <Area type="monotone" dataKey="users" stroke="#34d399" fillOpacity={1} fill="url(#colorUsers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  )
}
