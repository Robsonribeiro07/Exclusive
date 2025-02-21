'use client'
import { CircleX, LogOut, ShoppingBag, Star, User } from 'lucide-react'

const icons = {
  user: <User size={32} />,
  shoppingBag: <ShoppingBag size={32} />,
  Close: <CircleX size={32} />,
  Favorite: <Star size={32} />,
  LogOut: <LogOut size={32} />,
}
export interface ItemsProps {
  icon: keyof typeof icons
  label: string
}

export function Items({ icon, label }: ItemsProps) {
  return (
    <div className="flex items-center gap-2 text-white hover:text-black hover:bg-background px-3 w-full py-2 cursor-pointer">
      {icons[icon]}
      {label}
    </div>
  )
}
