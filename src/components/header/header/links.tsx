'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'

interface LinksProps {
  href: string
  typeNavigation?: string
  name: string
}
export function Links({ href, name, typeNavigation = 'Link' }: LinksProps) {
  const pathname = usePathname()

  console.log(typeNavigation)
  const isActiveRoute = pathname === href ? 'underline' : 'no-underline'

  const handleAlertIsnotTypeLink = () => {
    if (typeNavigation === 'Link') return

    toast.dismiss()
    toast.info('Voce ja esta logado')

    setTimeout(() => {
      toast.dismiss()
    }, 1000)
  }
  if (typeNavigation === 'Link') {
    return (
      <Link
        href={href}
        className={`${isActiveRoute} text-black 1rem font-regular underline-offset-8 select-none`}
      >
        {name}
      </Link>
    )
  }

  return (
    <p
      className={`${isActiveRoute} text-black 1rem font-regular underline-offset-8 cursor-pointer select-none`}
      onClick={handleAlertIsnotTypeLink}
    >
      {name}
    </p>
  )
}
