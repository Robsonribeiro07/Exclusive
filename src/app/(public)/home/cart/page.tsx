import { Products } from '@/api/products/get-products'
import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs'
import { CartContent } from '@/components/pages/cart/cart-content'
import { FooterContentCart } from '@/components/pages/cart/footer/footer-content'

async function getProducts() {
  const response = await fetch('https://dummyjson.com/products', {
    cache: 'no-store',
  })
  const data = (await response.json()) as Products
  return data
}
export default async function CartPage() {
  const products = await getProducts()
  return (
    <div className="flex w-full max-w-[1170px] mx-auto min-h-screen my-[5.5rem] flex-col justify-start  gap-[3rem] ">
      <Breadcrumbs />

      <CartContent products={products.products} />

      <FooterContentCart />
    </div>
  )
}
