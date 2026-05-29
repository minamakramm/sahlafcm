import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Camera, Loader2, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { Select } from '@/components/ui'
import toast from 'react-hot-toast'
import { profileSchema } from '../validators/profileSchema'
import { useProfile } from '../hooks/useProfile'
import { useAuthStore } from '@/stores/authStore'

export function ProfileForm() {
  const { t } = useTranslation('auth')
  const { profile, updateProfile, uploadAvatar, isLoading, isUploading } = useProfile()
  const user = useAuthStore((s) => s.user)
  const fileInputRef = useRef(null)
  const [avatarPreview, setAvatarPreview] = useState(null)


  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      full_name: profile?.full_name || '',
      preferred_language: profile?.preferred_language || 'en',
    },
    values: {
      full_name: profile?.full_name || '',
      preferred_language: profile?.preferred_language || 'en',
    },
  })

  // Debug: log validation errors
  if (Object.keys(errors).length > 0) {
    console.warn('[ProfileForm] Validation errors:', errors)
  }

  const onSubmit = async (data) => {
    console.log('[ProfileForm] Submitting data:', data)
    await updateProfile(data)
  }

  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Show preview immediately
    const reader = new FileReader()
    reader.onload = (ev) => setAvatarPreview(ev.target?.result)
    reader.readAsDataURL(file)

    // Upload
    const result = await uploadAvatar(file)
    if (!result.success) {
      setAvatarPreview(null) // revert preview on failure
    }
  }

  const avatarSrc = avatarPreview || profile?.avatar_url

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>

      {/* Avatar */}
      <div className="flex flex-col items-center gap-4">
        <button
          type="button"
          onClick={handleAvatarClick}
          className="relative group"
          disabled={isUploading}
        >
          <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-glass-border bg-glass-200 flex items-center justify-center">
            {avatarSrc ? (
              <img
                src={avatarSrc}
                alt={profile?.full_name || 'Avatar'}
                className="h-full w-full object-cover"
              />
            ) : (
              <User size={36} className="text-white/30" />
            )}
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            {isUploading ? (
              <Loader2 size={20} className="text-white animate-spin" />
            ) : (
              <Camera size={20} className="text-white" />
            )}
          </div>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleFileChange}
          className="hidden"
        />
        <p className="text-xs text-white/30">{t('profile.avatarHint')}</p>
      </div>

      {/* Full Name */}
      <div className="space-y-2">
        <label htmlFor="profile-name" className="block text-sm font-medium text-white/70">
          {t('profile.displayName')}
        </label>
        <input
          id="profile-name"
          type="text"
          autoComplete="name"
          className={`w-full rounded-glass-sm border bg-glass-100 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:ring-2 focus:ring-accent-500/40 ${
            errors.full_name
              ? 'border-red-500/50'
              : 'border-glass-border focus:border-accent-500/40'
          }`}
          {...register('full_name')}
        />
        {errors.full_name && (
          <p className="text-xs text-red-400">{errors.full_name.message}</p>
        )}
      </div>

      {/* Email (readonly) */}
      <div className="space-y-2">
        <label htmlFor="profile-email" className="block text-sm font-medium text-white/70">
          {t('profile.email')}
        </label>
        <input
          id="profile-email"
          type="email"
          value={user?.email || ''}
          readOnly
          className="w-full rounded-glass-sm border border-glass-border bg-glass-50 px-4 py-3 text-sm text-white/50 outline-none cursor-not-allowed"
        />
      </div>


      {/* Preferred Language */}
      <div className="space-y-2">
        <label htmlFor="profile-lang" className="block text-sm font-medium text-white/70">
          {t('profile.preferredLanguage')}
        </label>
        <Select 
          id="profile-lang" 
          value={watch('preferred_language')}
          onChange={(e) => setValue('preferred_language', e.target.value, { shouldDirty: true })}
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </Select>
      </div>

      {/* Role badge */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white/70">
          {t('profile.role')}
        </label>
        <span className="inline-flex items-center rounded-pill bg-[var(--active-overlay)] px-3 py-1 text-xs font-medium text-[var(--text-brand)] border border-[var(--border-default)]">
          {profile?.role || 'student'}
        </span>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full accent-button flex items-center justify-center gap-2 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {t('profile.saving')}
          </>
        ) : (
          t('profile.updateProfile')
        )}
      </button>
    </form>
  )
}
