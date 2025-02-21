import Image from 'next/image'
import { ProductDescont } from './product-descont'

import { Eye, Heart } from 'lucide-react'
import { Price } from './price'
import { StarRating } from './SartRating'
import { useState } from 'react'
import { AddCart } from './add-cart'

interface CardProductProps {
  title: string
  price: number
  image: string
  showAddCartDefault?: boolean
}
export function CardProduct({
  title,
  price,
  image,
  showAddCartDefault = false,
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
      className="h-[21.875rem] w-[250px] cursor-pointer min-h-fit"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      data-testid="card-product"
    >
      <div className="w-full h-[70%] bg-gray200 relative rounded-4 flex flex-col items-center overflow-hidden">
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
          width={120}
          height={120}
          alt="monitor"
          className="w-[12rem] h-full  object-cover"
        />

        <AddCart showAddCart={showAddCart} />
      </div>

      <p className="text-gray500 text-sm font-medium">{title}</p>

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
