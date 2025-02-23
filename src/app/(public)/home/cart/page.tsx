import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs'
import { CartContent } from '@/components/pages/cart/cart-content'
import { FooterContentCart } from '@/components/pages/cart/footer/footer-content'

export default async function CartPage() {
  return (
    <div className="flex w-full max-w-[1170px] mx-auto min-h-screen my-[5.5rem] flex-col justify-start  gap-[3rem] ">
      <Breadcrumbs />

      <CartContent />

      <FooterContentCart />
    </div>
  )
}
