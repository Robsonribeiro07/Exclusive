import { SectionsProduct } from '@/components/pages/Wishlist/sections-product'

export interface ResponseProducts {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
}
const getProducts = async (): Promise<ResponseProducts[]> => {
  const response = await fetch(
    'https://fakestoreapi.com/products/category/jewelery'
  )

  const data = (await response.json()) as ResponseProducts[]

  return data
}
export default async function Page() {
  const data = await getProducts()
  return (
    <div className="mx-auto w-full max-w-[1170px] min-h-screen my-[5.125rem]">
      <SectionsProduct data={data} />
    </div>
  )
}
