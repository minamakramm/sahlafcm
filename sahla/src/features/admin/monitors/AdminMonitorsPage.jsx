import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'
import { Users, Shield, Trash2, Plus, Search, Loader2, AlertCircle } from 'lucide-react'
import { Button, Input, Avatar } from '@/components/ui'
import toast from 'react-hot-toast'

export default function AdminMonitorsPage() {
  const { t, i18n } = useTranslation('admin')
  const queryClient = useQueryClient()
  const isRtl = i18n.language === 'ar'
  
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedDeptId, setSelectedDeptId] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  // Fetch current monitors
  const { data: monitors, isLoading: isMonitorsLoading } = useQuery({
    queryKey: ['admin-monitors'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('monitors')
        .select(`
          id,
          created_at,
          profile:profiles!user_id(id, full_name, email, avatar_url),
          department:departments!department_id(id, name, name_ar)
        `)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data
    }
  })

  // Fetch departments for the assignment dropdown
  const { data: departments } = useQuery({
    queryKey: ['admin-departments'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('departments')
        .select('id, name, name_ar, slug')
        .eq('is_active', true)
      if (error) throw error
      return data
    }
  })

  // Search for users to add as monitors
  const handleSearchUsers = async () => {
    if (!searchQuery.trim()) return
    setIsSearching(true)
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, full_name, email, avatar_url')
        .or(`email.ilike.%${searchQuery}%,full_name.ilike.%${searchQuery}%`)
        .limit(5)
      
      if (error) throw error
      setSearchResults(data || [])
    } catch (err) {
      toast.error('Failed to search users')
    } finally {
      setIsSearching(false)
    }
  }

  // Add monitor mutation
  const addMonitorMutation = useMutation({
    mutationFn: async ({ userId, departmentId }) => {
      const { data, error } = await supabase
        .from('monitors')
        .insert({
          user_id: userId,
          department_id: departmentId || null // null means monitor for all depts (admin helper)
        })
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-monitors'] })
      toast.success('Monitor assigned successfully')
      setSelectedUser(null)
      setSelectedDeptId('')
      setSearchQuery('')
      setSearchResults([])
    },
    onError: (error) => {
      if (error.code === '23505') {
        toast.error('This user is already a monitor for this department')
      } else {
        toast.error(error.message)
      }
    }
  })

  // Remove monitor mutation
  const removeMonitorMutation = useMutation({
    mutationFn: async (id) => {
      const { error } = await supabase
        .from('monitors')
        .delete()
        .eq('id', id)
      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-monitors'] })
      toast.success('Monitor access revoked')
    }
  })

  return (
    <div className="animate-slide-up space-y-8">
      <div>
        <h1 className="text-2xl font-black text-white mb-2 flex items-center gap-3">
          <Shield className="text-accent-400" />
          {isRtl ? 'إدارة المراقبين' : 'Monitor Management'}
        </h1>
        <p className="text-white/40 text-sm">
          {isRtl 
            ? 'قم بتعيين مستخدمين كمراقبين لإدارة المواعيد النهائية لأقسامهم.' 
            : 'Assign users as monitors to manage deadlines for their respective departments.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Assignment Form */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-6 space-y-6 sticky top-6 border-white/10 ring-1 ring-white/5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Plus size={20} className="text-accent-400" />
              {isRtl ? 'تعيين مراقب جديد' : 'Assign New Monitor'}
            </h3>

            {/* Step 1: Find User */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-white/50 uppercase tracking-widest">
                {isRtl ? '1. ابحث عن المستخدم' : '1. Find User'}
              </label>
              <div className="flex gap-2">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isRtl ? 'البريد الإلكتروني أو الاسم...' : 'Email or Name...'}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearchUsers()}
                  className="bg-white/5 border-white/10"
                />
                <Button 
                  onClick={handleSearchUsers} 
                  disabled={isSearching}
                  className="shrink-0"
                >
                  {isSearching ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
                </Button>
              </div>

              {searchResults.length > 0 && !selectedUser && (
                <div className="mt-2 rounded-xl bg-white/5 border border-white/10 overflow-hidden divide-y divide-white/5">
                  {searchResults.map(user => (
                    <button
                      key={user.id}
                      onClick={() => setSelectedUser(user)}
                      className="w-full flex items-center gap-3 p-3 hover:bg-white/10 transition-colors text-left"
                      dir={isRtl ? 'rtl' : 'ltr'}
                    >
                      <Avatar src={user.avatar_url} name={user.full_name} size="sm" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-white truncate">{user.full_name}</p>
                        <p className="text-xs text-white/40 truncate">{user.email}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {selectedUser && (
                <div className="flex items-center justify-between p-3 rounded-xl bg-accent-500/10 border border-accent-500/20">
                  <div className="flex items-center gap-3">
                    <Avatar src={selectedUser.avatar_url} name={selectedUser.full_name} size="sm" />
                    <div>
                      <p className="text-sm font-bold text-white uppercase tracking-tighter">{selectedUser.full_name}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelectedUser(null)} className="text-white/40 hover:text-white transition-colors">
                    <X size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Step 2: Assign Department */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-white/50 uppercase tracking-widest">
                {isRtl ? '2. حدد القسم' : '2. Assign Department'}
              </label>
              <select
                value={selectedDeptId}
                onChange={(e) => setSelectedDeptId(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-all cursor-pointer"
              >
                <option value="" className="bg-[#13121a]">
                  {isRtl ? 'جميع الأقسام (قوة كاملة)' : 'All Departments (Full Access)'}
                </option>
                {departments?.map(dept => (
                  <option key={dept.id} value={dept.id} className="bg-[#13121a]">
                    {isRtl ? dept.name_ar : dept.name}
                  </option>
                ))}
              </select>
            </div>

            <Button
              className="w-full shadow-lg shadow-accent-500/20"
              disabled={!selectedUser || addMonitorMutation.isPending}
              onClick={() => addMonitorMutation.mutate({ userId: selectedUser.id, departmentId: selectedDeptId })}
            >
              {addMonitorMutation.isPending ? <Loader2 className="animate-spin mr-2" size={18} /> : <Plus className="mr-2" size={18} />}
              {isRtl ? 'تعيين كمراقب' : 'Assign as Monitor'}
            </Button>
          </div>
        </div>

        {/* Monitor List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-bold text-white uppercase tracking-tighter italic">
              {isRtl ? 'المراقبون الحاليون' : 'Active Monitors'}
            </h3>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white/40 uppercase tracking-widest">
              {monitors?.length || 0} {isRtl ? 'مراقب' : 'Total'}
            </span>
          </div>

          {isMonitorsLoading ? (
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-20 bg-white/5 animate-pulse rounded-2xl border border-white/5" />
              ))}
            </div>
          ) : monitors?.length === 0 ? (
            <div className="glass-card p-12 text-center flex flex-col items-center justify-center space-y-4 border-dashed border-white/10">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white/20">
                <Users size={32} />
              </div>
              <div>
                <p className="text-white/60 font-bold">{isRtl ? 'لا يوجد مراقبون معنيون حالياً' : 'No monitors assigned yet'}</p>
                <p className="text-white/30 text-xs mt-1">{isRtl ? 'ابدأ بتعيين مراقب من القائمة الجانبية' : 'Start by assigning a monitor from the sidebar form'}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {monitors.map(monitor => (
                <div 
                  key={monitor.id}
                  className="group relative glass-card p-4 hover:bg-white/[0.04] transition-all duration-300 border-white/10 flex items-center justify-between"
                  dir={isRtl ? 'rtl' : 'ltr'}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <Avatar 
                      src={monitor.profile?.avatar_url} 
                      name={monitor.profile?.full_name} 
                      size="md"
                      className="border border-white/10"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-black uppercase tracking-tight italic truncate">
                          {monitor.profile?.full_name}
                        </h4>
                        <span className="px-2 py-0.5 bg-accent-500/10 text-accent-400 text-[9px] font-black uppercase tracking-widest rounded-md border border-accent-500/20">
                          {monitor.department ? (isRtl ? monitor.department.name_ar : monitor.department.name) : (isRtl ? 'كافة الأقسام' : 'Global')}
                        </span>
                      </div>
                      <p className="text-white/30 text-xs truncate font-medium">{monitor.profile?.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                     <button
                       onClick={() => {
                         if (window.confirm(isRtl ? 'هل أنت متأكد من سحب صلاحيات المراقبة؟' : 'Revoke monitor access?')) {
                           removeMonitorMutation.mutate(monitor.id)
                         }
                       }}
                       className="p-3 rounded-xl bg-red-500/10 border border-red-500/10 text-red-500 hover:bg-red-500/20 hover:border-red-500/30 transition-all opacity-0 group-hover:opacity-100"
                       title={isRtl ? 'إزالة' : 'Revoke Access'}
                     >
                       <Trash2 size={16} />
                     </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function X({ size, className }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  )
}
