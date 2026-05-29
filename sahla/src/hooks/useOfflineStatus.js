import { useState, useEffect, useCallback } from 'react'

/**
 * Hook to detect online/offline status.
 * Returns { isOnline, isOffline, lastOnlineAt }
 */
export function useOfflineStatus() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  )
  const [lastOnlineAt, setLastOnlineAt] = useState(
    isOnline ? new Date() : null
  )

  const handleOnline = useCallback(() => {
    setIsOnline(true)
    setLastOnlineAt(new Date())
  }, [])

  const handleOffline = useCallback(() => {
    setIsOnline(false)
  }, [])

  useEffect(() => {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [handleOnline, handleOffline])

  return {
    isOnline,
    isOffline: !isOnline,
    lastOnlineAt,
  }
}
