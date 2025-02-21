import { Product } from '@/api/products/get-products'
import { CarouselThisMonth } from './carousel'
import { HeaderThisMonth } from './header'

export function ContentThisMonth({ products }: { products: Product[] }) {
  return (
    <div className="lg:mt-[13.5625rem] mt-10 flex flex-col gap-[3.125rem]">
      <HeaderThisMonth />

      <CarouselThisMonth products={products} />
    </div>
  )
}
