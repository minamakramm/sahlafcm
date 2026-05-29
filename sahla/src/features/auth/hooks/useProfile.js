import { useState } from 'react'
import { useAuthStore } from '@/stores/authStore'
import { useThemeStore } from '@/stores/themeStore'
import { supabase } from '@/lib/supabase'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'

const MAX_AVATAR_SIZE = 2 * 1024 * 1024 // 2MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']

export function useProfile() {
  const [isLoading, setIsLoading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const profile = useAuthStore((s) => s.profile)
  const user = useAuthStore((s) => s.user)
  const fetchProfile = useAuthStore((s) => s.fetchProfile)
  const setLanguage = useThemeStore((s) => s.setLanguage)
  const { t } = useTranslation('auth')

  /**
   * Update profile fields (full_name, preferred_language)
   */
  const updateProfile = async ({ full_name, preferred_language }) => {
    if (!user) return { success: false }
    setIsLoading(true)
    try {
      const payload = {
        id: user.id,
        full_name,
        preferred_language,
        updated_at: new Date().toISOString(),
      }
      console.log('[useProfile] Upserting profile:', payload)

      const { data, error } = await supabase
        .from('profiles')
        .upsert(payload)
        .select()
        .single()

      if (error) {
        console.error('[useProfile] Supabase error:', error)
        throw error
      }
      console.log('[useProfile] Update successful, new data:', data)

      // If language changed, apply it
      if (preferred_language && preferred_language !== profile?.preferred_language) {
        setLanguage(preferred_language)
      }

      useAuthStore.setState({ profile: data })
      toast.success(t('profile.updateSuccess'))
      return { success: true }
    } catch (error) {
      console.error('[Profile] Update error:', error)
      toast.error(t('profile.updateError'))
      return { success: false, error: error.message }
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * Upload avatar to Supabase Storage
   */
  const uploadAvatar = async (file) => {
    if (!user) return { success: false }

    // Validate file
    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error('Only JPEG, PNG, and WebP images are allowed.')
      return { success: false }
    }
    if (file.size > MAX_AVATAR_SIZE) {
      toast.error('Image must be smaller than 2MB.')
      return { success: false }
    }

    setIsUploading(true)
    try {
      const ext = file.name.split('.').pop()
      const folderPath = `${user.id}`
      const fileName = `avatar_${Date.now()}.${ext}` // Unique name to bust cache
      const filePath = `${folderPath}/${fileName}`

      // 1. Clean up old avatars to enforce "Only one pic" rule
      const { data: existingFiles } = await supabase.storage
        .from('avatars')
        .list(folderPath)

      if (existingFiles && existingFiles.length > 0) {
        const filesToDelete = existingFiles.map(f => `${folderPath}/${f.name}`)
        await supabase.storage.from('avatars').remove(filesToDelete)
      }

      // 2. Upload new avatar
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath)

      // Update profile with avatar URL
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl, updated_at: new Date().toISOString() })
        .eq('id', user.id)

      if (updateError) throw updateError

      await fetchProfile(user.id)
      toast.success(t('profile.avatarUpdated'))
      return { success: true, url: publicUrl }
    } catch (error) {
      console.error('[Profile] Avatar upload error:', error)
      toast.error(t('profile.avatarError'))
      return { success: false, error: error.message }
    } finally {
      setIsUploading(false)
    }
  }

  return {
    profile,
    updateProfile,
    uploadAvatar,
    isLoading,
    isUploading,
  }
}
