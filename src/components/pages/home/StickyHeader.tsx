import { ComponentProps } from 'react'

interface StickyHeaderProps extends ComponentProps<'div'> {
  textColor?: string
  fontWeight?: 'font-semibold' | 'font-regular'
  fontSize?: string
}
export function StickyHeader({
  children,
  textColor = 'text-redSticker',
  fontWeight = 'font-semibold',
  fontSize = 'text-base',
}: StickyHeaderProps) {
  return (
    <div className="flex gap-3 w-fit items-center text-redSticker font-semibold">
      <p className="w-[1.3rem] h-[2.1rem] bg-redSticker rounded" />

      <p style={{ color: textColor }} className={`${fontWeight} ${fontSize}`}>
        {children}
      </p>
    </div>
  )
}
