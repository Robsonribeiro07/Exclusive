'use client'
import { UseCountdown } from '@/hooks/use-conntwdown'
import { CountdownStep } from './countdown-step'

export function Countdowm() {
  const { timeLeft } = UseCountdown({ date: '2025-03-30' })

  return (
    <div className="flex gap-[1.1rem] select-none">
      {Object.entries(timeLeft).map(
        ([keyframe, { value, title }], index, array) => {
          const isEnd = index === array.length - 1
          return (
            <CountdownStep
              key={keyframe}
              title={title}
              value={value}
              IsEnd={isEnd}
            />
          )
        }
      )}
    </div>
  )
}
