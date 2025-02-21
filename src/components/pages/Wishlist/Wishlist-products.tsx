import Image from 'next/image'

import { Trash2 } from 'lucide-react'
import { useState } from 'react'
import { ProductDescont } from '@/components/products/product-descont'
import { Price } from '@/components/products/price'
import { AddCart } from '@/components/products/add-cart'

interface CardProductProps {
  title: string
  price: number
  image: string
  showAddCartDefault?: boolean
  handleRemoveItem?: () => void
}
export function CardProductWishlist({
  title,
  price,
  image,
  showAddCartDefault = false,
  handleRemoveItem,
}: CardProductProps) {
  const [showAddCart, setShowAddCart] = useState(showAddCartDefault)

  const handleMouseOver = () => {
    setShowAddCart(true)
  }

  const handleMouseLeave = () => {
    setShowAddCart(false)
  }

  return (
    <div
      className="h-[21.875rem] w-[250px] cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      data-testid="card-product"
    >
      <div className="w-full h-[70%] bg-gray200 relative rounded-4 flex flex-col items-center overflow-hidden">
        <ProductDescont descont={50} className="absolute top-3 left-2 " />
        <div className="absolute top-3 right-2 flex flex-col gap-2">
          <Trash2
            size={20}
            className="bg-white w-8 h-8 rounded-full cursor-pointer p-1"
            onClick={handleRemoveItem}
          />
        </div>

        <Image
          src={image}
          width={120}
          height={120}
          alt="monitor"
          className="w-[12rem] h-full  object-cover"
        />

        <AddCart showAddCart={showAddCart} handleAddProduct={() => {}} />
      </div>

      <p className="text-gray500 text-sm font-medium">{title}</p>

      <div className="flex gap-2 mt-1">
        <Price discount>{price}</Price>

        <Price withLine>{price}</Price>
      </div>
    </div>
  )
}
