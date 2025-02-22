'use client'
import { useEffect, useState, useRef } from 'react'

export interface CountdownResult {
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

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const savedTargetTime = sessionStorage.getItem('countdownTarget')
    let targetTime = savedTargetTime ? parseInt(savedTargetTime, 10) : null

    if (!targetTime) {
      targetTime = new Date(`${date}T00:00:00Z`).getTime() + 4 * 60 * 60 * 1000
      sessionStorage.setItem('countdownTarget', targetTime.toString())
    }

    const updateCountdown = () => {
      const now = Date.now()
      const distance = targetTime! - now

      if (distance <= 0) {
        clearInterval(intervalRef.current!)
        setTimeLeft({
          days: { value: 0, title: 'Days' },
          hours: { value: 0, title: 'Hours' },
          minutes: { value: 0, title: 'Minutes' },
          seconds: { value: 0, title: 'Seconds' },
        })
        return
      }

      setTimeLeft({
        days: {
          value: Math.floor(distance / (1000 * 60 * 60 * 24)),
          title: 'Days',
        },
        hours: {
          value: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          title: 'Hours',
        },
        minutes: {
          value: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          title: 'Minutes',
        },
        seconds: {
          value: Math.floor((distance % (1000 * 60)) / 1000),
          title: 'Seconds',
        },
      })
    }

    updateCountdown()
    intervalRef.current = setInterval(updateCountdown, 1000)

    return () => clearInterval(intervalRef.current!)
  }, [date])

  return { timeLeft }
}
