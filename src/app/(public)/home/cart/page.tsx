import { Products } from '@/api/products/get-products'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CartContent } from '@/components/cart/cart-content'

async function getProducts() {
  const response = await fetch('https://dummyjson.com/products', {
    cache: 'force-cache',

    method: 'GET',
    next: { tags: ['products'], revalidate: 60 },
  })
  const data = (await response.json()) as Products
  return data
}
export default async function CartPage() {
  const products = await getProducts()
  return (
    <div className="flex w-full max-w-[1170px] mx-auto min-h-screen my-[5.5rem] flex-col justify-start  gap-[5em] ">
      <Breadcrumbs />

      <CartContent products={products.products} />
    </div>
  )
}
