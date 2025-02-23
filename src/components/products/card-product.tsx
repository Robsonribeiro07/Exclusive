'use client'
import Image from 'next/image'
import { ProductDescont } from './product-descont'

import { Eye, Heart } from 'lucide-react'
import { Price } from './price'
import { StarRating } from './SartRating'
import { useState } from 'react'
import { AddCart } from './add-cart'
import { useNewProductCart } from '@/hooks/cart/new-product-cart'
interface CardProductProps {
  title: string
  price: number
  image: string
  showAddCartDefault?: boolean
  id: string
}
export function CardProduct({
  title,
  price,
  image,
  id,
  showAddCartDefault = false,
}: CardProductProps) {
  const [showAddCart, setShowAddCart] = useState(showAddCartDefault)

  const { handleAddNewProducts } = useNewProductCart()

  const handleMouseOver = () => {
    setShowAddCart(true)
  }

  const handleMouseLeave = () => {
    setShowAddCart(false)
  }

  const handleAddProduct = async () => {
    const idTemp = crypto.randomUUID()

    handleAddNewProducts({
      price,
      productId: id,
      image,
      title,
      _id: idTemp,
    })
  }

  return (
    <div
      className="h-[21.875rem] w-[250px] cursor-pointer  "
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      data-testid="card-product"
    >
      <div className="w-full h-[70%] bg-gray200 relative rounded-4 flex flex-col items-center justify-center overflow-hidden ">
        <ProductDescont descont={50} className="absolute top-3 left-2 " />
        <div className="absolute top-3 right-2 flex flex-col gap-2">
          <Eye
            size={20}
            className="bg-white w-7 h-7 rounded-full cursor-pointer"
          />
          <Heart
            size={20}
            className="bg-white w-7 h-7 rounded-full cursor-pointer"
          />
        </div>

        <Image
          src={image}
          width={600}
          height={600}
          alt="monitor"
          className="w-[80%] h-[80%]  object-contain"
        />

        <AddCart
          showAddCart={showAddCart}
          handleAddProduct={handleAddProduct}
        />
      </div>

      <p className="text-gray500 text-sm font-medium">{title.slice(0, 40)}</p>

      <div className="flex gap-2 mt-1">
        <Price discount>{price}</Price>

        <Price withLine>{price}</Price>
      </div>

      <div className="flex items-end gap-2 mt-2">
        <StarRating totalReviews={30} positiveReviews={10} />

        <span className="flex items-center text-Label">(1000)</span>
      </div>
    </div>
  )
}
