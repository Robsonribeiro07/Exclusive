import { Button } from '@/components/ui/button'
import { CarouselOurProducts } from './carousel'
import { HeaderOurProducts } from './header'
import { Product } from '@/api/products/get-products'

export function ContentOurProducts({ products }: { products: Product[] }) {
  return (
    <div className="mt-[6.9375rem] flex flex-col gap-[4.75rem]">
      <HeaderOurProducts />
      <CarouselOurProducts products={products} />

      <Button className="w-[14.625rem] h-[2.3rem] bg-buttonRed py-[1.5rem] rounded-none mx-auto hover:bg-buttonRed/90">
        View all products
      </Button>
    </div>
  )
}
