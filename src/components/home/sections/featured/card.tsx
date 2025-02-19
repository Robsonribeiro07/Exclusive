import Image from 'next/image'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps extends ComponentProps<'div'> {
  image: string
  objectFit?: 'cover' | 'contain'
  left?: string
  bottom?: string
  right?: string
  title: string
  description: string
}
export function Card({
  className,
  image,
  objectFit = 'cover',
  left,
  bottom,
  title,
  description,
  right,
  ...props
}: CardProps) {
  return (
    <div
      className={twMerge(
        'w-full h-full  flex flex-col justify-end relative',
        className
      )}
      {...props}
    >
      <Image
        objectFit={objectFit}
        layout="fill"
        src={image}
        alt="Playstation"
      />
      <div
        className={twMerge(
          'absolute text-textColor z-10 flex flex-col gap-2 items-start',
          left,
          bottom,
          right
        )}
      >
        <p className="text-[1.5rem] text-textColor ">{title}</p>
        <p className="text-xs w-[75%]">{description}</p>

        <button className="text-[1rem] font-medium underline underline-offset-4">
          Shop Now
        </button>
      </div>
    </div>
  )
}
