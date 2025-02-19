import { useState, useEffect } from 'react'

export function useTabFocus() {
  const [isTabFocused, setIsTabFocused] = useState(true)

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabFocused(!document.hidden)
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return isTabFocused
}
