'use client'

import { useIsLoggedIn } from '@/hooks/user/user-isLoggin'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function HandleNavigationLoggin() {
  const { replace } = useRouter()

  const isLoggin = useIsLoggedIn()

  const handleNotLogginCart = () => {
    toast.info('Faça login primeiro ')
    toast.dismiss()

    replace('/auth/sign-in')
    return
  }

  if (isLoggin) {
    return (
      <Link href="/home/cart">
        <ShoppingCart className="cursor-pointer" />
      </Link>
    )
  }

  return (
    <div onClick={handleNotLogginCart}>
      <ShoppingCart className="cursor-pointer" />
    </div>
  )
}
