'use client'

interface StepProgressProps {
  progress: boolean
}

export function StepProgress({ progress }: StepProgressProps) {
  const progressWidth = progress ? 'w-full' : 'w-0'

  return (
    <div className="w-[8rem] h-2 rounded-sm bg-slate-200">
      <div className={`h-2 rounded-sm bg-black ${progressWidth}`} />
    </div>
  )
}
