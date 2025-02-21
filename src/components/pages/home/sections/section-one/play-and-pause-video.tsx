import { useEffect, useRef } from 'react'

export function usePlayAndPauseVideo() {
  const videosElements = useRef<{ [key: string]: HTMLElement | null }>({})

  const setElementref = (key: string) => (node: HTMLElement | null) => {
    videosElements.current[key] = node
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const { target, isIntersecting } = entry

        const video = target as HTMLVideoElement

        if (isIntersecting) {
          video.play()
        } else {
          video.pause()
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    )
    const currentVideos = { ...videosElements.current }

    Object.keys(currentVideos).forEach((key) => {
      const element = currentVideos[key]

      if (element) observer.observe(element)
    })

    return () => {
      Object.keys(currentVideos).forEach((key) => {
        const element = currentVideos[key]

        if (element) observer.unobserve(element)
      })
    }
  }, [])
  return { setElementref }
}
