'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { CardProduct } from '../../../products/card-product'
import { Product } from '@/api/products/get-products'

export function CarouselThisMonth({ products }: { products: Product[] }) {
  return (
    <Carousel>
      <CarouselContent className="flex select-none">
        {products.map((product) => (
          <CarouselItem key={product.id} className="basis-1/4">
            <CardProduct
              title={product.title}
              price={product.price}
              image={product.images[0]}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
