'use client'
import { CarouselProdcuts } from './carousel-prodcuts'
import { HeaderCategoryId } from './header'
import { useState } from 'react'
import { ContentForYou } from './Just-for-you/content'
import { ResponseProducts } from '@/app/(public)/home/products/wishlist/page'
import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs'
import { useCart } from '@/stores/products/cart/use-state-cart'

export function SectionsProduct({ data }: { data: ResponseProducts[] }) {
  const [initailProducts, setInitailProducts] =
    useState<ResponseProducts[]>(data)

  const { value } = useCart()

  const handleRemoveItem = (id: number) => {
    const newProductsWithinRemovedProcuts = initailProducts.filter(
      (products) => products.id !== id
    )
    setInitailProducts(newProductsWithinRemovedProcuts)
  }
  return (
    <div className="w-full flex flex-col gap-10 h-full  ">
      <Breadcrumbs />
      {value}
      <HeaderCategoryId totalProducts={initailProducts.length} />
      <CarouselProdcuts
        data={initailProducts}
        handleRemoveItem={handleRemoveItem}
      />

      <ContentForYou data={initailProducts} />
    </div>
  )
}
