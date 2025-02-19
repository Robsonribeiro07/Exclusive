'use client'
import { Products } from '@/api/products/get-products'
import { CardProduct } from '@/components/products/card-product'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Product } from '@/api/products/get-products'

export function CarouselOurProducts({ products }: { products: Product[] }) {
  return (
    <Carousel className="select-none relative">
      <CarouselContent>
        {products.map((product) => {
          return (
            <CarouselItem
              className="flex gap-7 flex-col basis-1/4"
              key={product.id}
            >
              <CardProduct
                title={product.title}
                price={product.price}
                image={product.images[0]}
              />
              <CardProduct
                title={product.title}
                price={product.price}
                image={product.images[0]}
              />
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <div className="absolute top-[-6rem] right-10">
        <CarouselNext />
        <CarouselPrevious />
      </div>
    </Carousel>
  )
}
