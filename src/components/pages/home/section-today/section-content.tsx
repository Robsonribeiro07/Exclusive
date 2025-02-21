'use client'
import { Product } from '@/api/products/get-products'
import { SectionHeader } from './section-header'
import { CarouselProducts } from '@/components/products/carousel-products'
import { useState } from 'react'

export function SectionContentTodays({
  products: InititalProducts,
}: {
  products: Product[]
}) {
  const [products] = useState(InititalProducts)

  // const handleSearchMoreProducts = async (limit: number) => {
  //   const response = await fetch(
  //     `https://fakestoreapi.com/products?limit=${limit}`
  //   )

  //   const newProducts = (await response.json()) as Products[]

  //   const filtredProducts = newProducts.filter(
  //     (newProducts) =>
  //       !products.some((products) => products.products.id !== newProducts.id)
  //   )

  //   setProducts([...products, ...filtredProducts])
  // }

  return (
    <div className="w-full  h-full max-h-[30,8125rem] mt-[9.125rem]">
      <SectionHeader />
      <div className="w-full h-full max-h-[30,8125rem] mt-[9.125rem]">
        <CarouselProducts
          products={products}
          handleNewProducts={() => {}}
          // handleNewProducts={handleSearchMoreProducts}
        />
      </div>
    </div>
  )
}
