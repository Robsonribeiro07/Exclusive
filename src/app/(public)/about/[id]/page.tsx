'use client'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function Page() {
  const pathnames = '/auth/sign-in/dashboard'
  return (
    <div className="flex w-full max-w-[1170px] mx-auto">
      <Breadcrumbs pathname={pathnames} />
    </div>
  )
}
