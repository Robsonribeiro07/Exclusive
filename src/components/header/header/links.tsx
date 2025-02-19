'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LinksProps {
  href: string
  name: string
}
export function Links({ href, name }: LinksProps) {
  const pathname = usePathname()

  const isActiveRoute = pathname === href ? 'underline' : 'no-underline'

  return (
    <Link
      href={href}
      className={`${isActiveRoute} text-black 1rem font-regular underline-offset-8`}
    >
      {name}
    </Link>
  )
}
