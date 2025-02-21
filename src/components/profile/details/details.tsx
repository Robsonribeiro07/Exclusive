'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { User } from 'lucide-react'
import { Items, ItemsProps } from './items'

const itemsDetailsProfile = [
  { icon: 'user', label: 'Manage My Account', key: 'Account' },
  { icon: 'shoppingBag', label: 'My Orders', key: 'Orders' },
  { icon: 'Close', label: 'My cancellations', key: 'cancellations' },
  {
    icon: 'Favorite',
    label: 'My Wishlist',
    key: 'Wishlist',
    href: '/products/wishlist',
  },
  { icon: 'LogOut', label: 'Logout', key: 'Logout' },
] as (ItemsProps & { key: string })[]
export function DetailsProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <User
          className="hover:bg-redSticker hover:text-white rounded-full p-1 cursor-pointer"
          size={35}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[250px] h-[250px]  mt-[7rem] rounded flex items-start justify-start flex-col  backdrop-blur-3xl bg-transparent  "
        side="left"
      >
        {itemsDetailsProfile.map((item) => (
          <Items
            key={item.key}
            icon={item.icon}
            label={item.label}
            href={item.href}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
