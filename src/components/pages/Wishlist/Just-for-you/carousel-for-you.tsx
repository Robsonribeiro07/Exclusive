import { ResponseProducts } from '@/app/(public)/products/Wishlist/page'
import { CardProduct } from '@/components/products/card-product'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export function CarouselForYou({ data }: { data: ResponseProducts[] }) {
  return (
    <Carousel>
      <CarouselContent>
        {data.map((products) => (
          <CarouselItem key={products.id} className="basis-1/4 min-h-fit">
            <CardProduct
              title={products.title}
              price={Number(products.price)}
              image={products.image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
