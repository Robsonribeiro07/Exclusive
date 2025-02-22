import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs'
import { ContentDetailsCheckout } from '@/components/pages/checkout/biiling-details/content'

export default function Page() {
  return (
    <div className="w-full max-w-[1170px] mx-auto min-h-screen mt-[3.3125rem]">
      <Breadcrumbs />
      <div className="w-full h-full grid grid-cols-2 mt-[3.75rem]">
        <ContentDetailsCheckout />
      </div>
    </div>
  )
}
