'use client'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { CardProduct } from '@/components/products/card-product'
import { Button } from '../ui/button'
import { Product } from '@/api/products/get-products'
import { useEffect, useState } from 'react'

interface CarouselProductsProps {
  products: Product[]
  handleNewProducts: (limit: number) => void
}
export function CarouselProducts({
  products,
  handleNewProducts,
}: CarouselProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!api) return

    const updateIndex = () => {
      const newIndex = api.selectedScrollSnap() + 1
      setCurrentIndex(newIndex)
      setCount(api.scrollSnapList().length)

      if (newIndex > 1 && newIndex >= count) {
        handleNewProducts(count + 5)
      }
    }

    setCurrentIndex(api.selectedScrollSnap() + 1)
    api.on('select', updateIndex)

    return () => {
      api.off('select', updateIndex)
    }
  }, [api, currentIndex, count, handleNewProducts])

  console.log(products)
  return (
    <Carousel
      className="w-full mt-[3rem] cursor-pointer select-none  "
      setApi={setApi}
    >
      <CarouselContent className="flex gap-[5rem] relative">
        {products.map((item) => (
          <CarouselItem key={item.id} className="basis-1/6">
            <CardProduct
              title={item.title}
              price={item.price}
              image={item.images[0]}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute  right-10 top-[-5rem]">
        <CarouselNext className="bg-gray200 " />
        <CarouselPrevious className="bg-gray200" />
      </div>

      <div className="w-full flex items-center mt-[5rem]">
        <Button className="mx-auto  w-[14.625rem] h-[3.5rem] rounded bg-buttonRed hover:bg-buttonRed/90">
          Ver todos
        </Button>
      </div>
    </Carousel>
  )
}
