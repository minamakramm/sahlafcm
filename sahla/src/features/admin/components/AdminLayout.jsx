import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { LayoutDashboard, MessageSquare, Users, Lightbulb, PieChart, AlertOctagon, Settings, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const ADMIN_LINKS = [
  { path: '/admin', icon: LayoutDashboard, label: 'nav.dashboard', exact: true },
  { path: '/admin/feedbacks', icon: MessageSquare, label: 'nav.feedback' },
  { path: '/admin/users', icon: Users, label: 'nav.users' },
  { path: '/admin/feature-requests', icon: Lightbulb, label: 'nav.featureRequests' },
  { path: '/admin/analytics', icon: PieChart, label: 'nav.analytics' },
  { path: '/admin/errors', icon: AlertOctagon, label: 'nav.errorLogs' },
  { path: '/admin/content-guide', icon: BookOpen, label: 'nav.contentGuide' },
  { path: '/admin/settings', icon: Settings, label: 'nav.settings' },
]

export const AdminLayout = () => {
  const { t } = useTranslation('admin')

  return (
    <>
      <Helmet>
        <title>Admin Dashboard — Sahla</title>
      </Helmet>
      <div className="min-h-screen flex flex-col md:flex-row pt-[72px]">
        {/* Sidebar */}
        <aside className="w-full md:w-64 glass-tier-1 md:min-h-[calc(100vh-72px)] border-r border-white/5 flex flex-col hide-scrollbar overflow-y-auto">
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-6">Admin Panel</h2>
            <nav className="flex flex-col gap-2">
              {ADMIN_LINKS.map(link => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.exact}
                    className={({ isActive }) => `
                      flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm
                      ${isActive 
                        ? 'bg-[rgba(99,102,241,0.2)] text-[#a5b4fc] shadow-[0_0_15px_rgba(99,102,241,0.1)]' 
                        : 'text-white/60 hover:text-white hover:bg-white/5'}
                    `}
                  >
                    <Icon size={18} />
                    {t(link.label)}
                  </NavLink>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-10 max-h-[calc(100vh-72px)] overflow-y-auto w-full">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}
