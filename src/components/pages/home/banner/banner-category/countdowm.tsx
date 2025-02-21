'use client'
interface CountdownProps {
  title: string
  value: number
}
export function Countdowm({ title, value }: CountdownProps) {
  return (
    <div className="w-16 h-16 bg-white rounded-full  text-black flex flex-col items-center justify-center">
      <p className="text-base font-semibold">
        {value.toString().padStart(2, '0')}
      </p>
      <p className="text-[11px] font-regular">{title}</p>
    </div>
  )
}
