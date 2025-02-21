'use client'
import headphones from '/public/category/headphones.svg'
import {
  laptop,
  phone,
  gaming,
  camera,
  smartwatch,
} from '../../../../../public/category/index'

import { tv } from 'tailwind-variants'

const category = tv({
  base: 'w-[10.625rem] h-[9.0625rem] rounded-lg text-[1rem] border border-[#B3B3B3] text-black flex items-center justify-center capitalize hover:bg-redSticker transition-all duration-300 cursor-pointer ',
})

const icons = {
  phone: phone,
  laptop: laptop,
  headphones: headphones,
  camera: camera,
  gaming: gaming,
  smartwatch: smartwatch,
}

interface CategoryCardProps {
  label: string
  icon: keyof typeof icons
}

export function CategoryCard({ label, icon = 'phone' }: CategoryCardProps) {
  const IconComponent = icons[icon]
  return (
    <div className={category()}>
      <div className="w-full h-full flex-col flex items-center justify-center">
        <IconComponent />
        <p>{label}</p>
      </div>
    </div>
  )
}
