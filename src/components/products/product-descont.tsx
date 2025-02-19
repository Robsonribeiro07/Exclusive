import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
interface ProductDescontProps extends ComponentProps<'p'> {
  descont: number
}
export function ProductDescont({
  descont,
  className,
  ...props
}: ProductDescontProps) {
  return (
    <p
      className={twMerge(
        'text-white bg-redSticker font-semibold  text-[0.875rem] w-[3.4375rem] px-3 py-1 rounded-sm',
        className
      )}
      {...props}
    >
      -{descont}%
    </p>
  )
}
