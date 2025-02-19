'use client'
import { useEffect, useState } from 'react'

interface CountdownResult {
  days: { value: number; title: string }
  hours: { value: number; title: string }
  minutes: { value: number; title: string }
  seconds: { value: number; title: string }
}

interface CountdownProps {
  date: string // Formato esperado: "YYYY-MM-DD"
}

export function UseCountdown({ date }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownResult>({
    days: { value: 0, title: 'Days' },
    hours: { value: 0, title: 'Hours' },
    minutes: { value: 0, title: 'Minutes' },
    seconds: { value: 0, title: 'Seconds' },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const target =
        new Date(`${date}T00:00:00Z`).getTime() + 4 * 60 * 60 * 1000
      const now = new Date().getTime()
      const distance = target - now

      if (distance <= 0) {
        clearInterval(interval)
        setTimeLeft({
          days: { value: 0, title: 'Days' },
          hours: { value: 0, title: 'Hours' },
          minutes: { value: 0, title: 'Minutes' },
          seconds: { value: 0, title: 'Seconds' },
        })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({
        days: { value: days, title: 'Days' },
        hours: { value: hours, title: 'Hours' },
        minutes: { value: minutes, title: 'Minutes' },
        seconds: { value: seconds, title: 'Seconds' },
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [date])

  return { timeLeft }
}
