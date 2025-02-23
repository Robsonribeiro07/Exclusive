import { getProducts } from '@/api/products/get-products'
import ContentCheckoutDetails from '@/components/pages/checkout/content-checkout'
export default async function Page() {
  const products = await getProducts()

  if (!products) return null
  return <ContentCheckoutDetails products={products.products} />
}
