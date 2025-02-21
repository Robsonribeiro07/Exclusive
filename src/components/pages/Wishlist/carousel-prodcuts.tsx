'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { CardProductWishlist } from './Wishlist-products'
import { ResponseProducts } from '@/app/(public)/products/wishlist/page'

export function CarouselProdcuts({
  data,
  handleRemoveItem,
}: {
  data: ResponseProducts[]
  handleRemoveItem: (id: number) => void
}) {
  return (
    <Carousel>
      <CarouselContent className="select-none">
        {data.map((product) => {
          return (
            <CarouselItem key={product.id} className="basis-1/4 ">
              <CardProductWishlist
                title={product.title}
                price={Number(product.price)}
                image={product.image}
                showAddCartDefault
                handleRemoveItem={() => handleRemoveItem(product.id)}
              />
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}
