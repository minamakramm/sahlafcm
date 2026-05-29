import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { BackgroundOrbs } from '@/components/layout/BackgroundOrbs'
import { OfflineBanner } from '@/components/layout/OfflineBanner'
import { BottomNav } from '@/components/layout/BottomNav'
import { Footer } from '@/components/layout/Footer'
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Lightbulb,
  BarChart2,
  AlertTriangle,
  FileText,
  Settings,
  ArrowLeft,
  Bell,
  Menu,
  X,
} from 'lucide-react'

const navItems = [
  { path: 'dashboard', icon: LayoutDashboard, labelKey: 'nav.dashboard' },
  { path: 'feedback', icon: MessageSquare, labelKey: 'nav.feedback' },
  { path: 'users', icon: Users, labelKey: 'nav.users' },
  { path: 'feature-requests', icon: Lightbulb, labelKey: 'nav.featureRequests' },
  { path: 'collaborators', icon: Users, labelKey: 'nav.collaborators' },
  { path: 'analytics', icon: BarChart2, labelKey: 'nav.analytics' },
  { path: 'monitors', icon: Users, labelKey: 'nav.monitors' },
  { path: 'error-logs', icon: AlertTriangle, labelKey: 'nav.errorLogs' },
  { path: 'notifications', icon: Bell, labelKey: 'nav.notifications' },
  { path: 'settings', icon: Settings, labelKey: 'nav.settings' },
]

export default function AdminLayout() {
  const { t } = useTranslation('admin')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>{t('nav.title')} — Sahla</title>
      </Helmet>
      
      <div className="relative min-h-screen flex flex-col overflow-x-hidden">
        <BackgroundOrbs />
        <OfflineBanner />
        
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar (Desktop only) */}
          <aside className="hidden md:flex w-64 shrink-0 bg-glass-50 border-r border-glass-border p-4 flex-col gap-1 z-20 overflow-y-auto custom-scrollbar">
            <div className="px-3 py-4 mb-2">
              <h2 className="text-lg font-bold text-white">{t('nav.title')}</h2>
            </div>
  
            <nav className="flex flex-col gap-1 flex-1">
              {navItems.map(({ path, icon: Icon, labelKey }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-glass-sm text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-accent-500/15 text-accent-400 border border-accent-500/20'
                        : 'text-white/60 hover:text-white hover:bg-glass-200 border border-transparent'
                    }`
                  }
                >
                  <Icon size={18} />
                  {t(labelKey)}
                </NavLink>
              ))}
            </nav>
  
            <NavLink
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-glass-sm text-sm font-medium text-white/40 hover:text-white hover:bg-glass-200 transition-all mt-6"
            >
              <ArrowLeft size={18} />
              {t('nav.backToSite')}
            </NavLink>
          </aside>
  
          {/* Main content */}
          <main className="flex-1 p-4 md:p-6 pb-24 md:pb-6 overflow-auto relative z-10 w-full">
            <div className="flex items-center justify-between mb-6 md:hidden">
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  {t('nav.title')}
                </h2>
                <button 
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-2 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </button>
            </div>
            <Outlet />
          </main>
        </div>

        {/* Mobile Slide-out Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] flex md:hidden">
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative bg-[#13121a] border-r border-white/10 w-64 p-4 flex flex-col h-full shadow-2xl animate-fade-in shadow-xl">
              <div className="flex justify-between items-center mb-6 px-1 pt-2">
                <h2 className="text-lg font-bold text-white">{t('nav.title')}</h2>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-1 flex-1 overflow-y-auto custom-scrollbar">
                {navItems.map(({ path, icon: Icon, labelKey }) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-accent-500/15 text-accent-400 border border-accent-500/20'
                          : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                      }`
                    }
                  >
                    <Icon size={18} />
                    {t(labelKey)}
                  </NavLink>
                ))}
              </nav>

              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/40 hover:text-white hover:bg-white/5 transition-all mt-4 border border-transparent hover:border-white/10"
              >
                <ArrowLeft size={18} />
                {t('nav.backToSite')}
              </NavLink>
            </div>
          </div>
        )}
  
        {/* Mobile footer navigation */}
        {/* We keep this hidden on Admin because it clashes with the admin drawer, or maybe it is useful */}
        <div className="md:hidden">
           {/* If bottom Nav is conflicting we can keep it */}
           <BottomNav />
        </div>
      </div>
    </>
  )
}
