'use client'
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
  if (!Array.isArray(products) || products.length === 0) return null

  return (
    <Carousel className="select-none relative">
      <CarouselContent>
        {products.map((product) => {
          return (
            <CarouselItem
              className="flex gap-7 flex-col lg:basis-1/4 basis-1/1"
              key={product.id}
            >
              <CardProduct
                title={product.title}
                price={product.price}
                image={product.images[0]}
                id={product.id.toString()}
              />
              <CardProduct
                title={product.title}
                price={product.price}
                image={product.images[0]}
                id={product.id.toString()}
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
