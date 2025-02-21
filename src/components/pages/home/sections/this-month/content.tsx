import { Product } from '@/api/products/get-products'
import { CarouselThisMonth } from './carousel'
import { HeaderThisMonth } from './header'

export function ContentThisMonth({ products }: { products: Product[] }) {
  return (
    <div className="mt-[13.5625rem] flex flex-col gap-[3.125rem]">
      <HeaderThisMonth />

      <CarouselThisMonth products={products} />
    </div>
  )
}
