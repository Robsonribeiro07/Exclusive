import { useEffect, useRef, useState } from 'react'

export function useVisibleElementInPage() {
  const [isVisible, setIsVisible] = useState(false)

  const elementRef = useRef<HTMLElement | null>(null)

  const handleSetElementRef = (node: HTMLElement | null) => {
    elementRef.current = node
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      setIsVisible(entry.isIntersecting)
    })

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  return { isVisible, handleSetElementRef }
}
