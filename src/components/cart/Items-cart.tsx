import Image from 'next/image'
import { QuantityItemsCart } from './quantity'

interface ItemsCartProps {
  image: string
  name: string
  price: number
  quantity?: number
}
export function ItemsCart({ image, name, price, quantity }: ItemsCartProps) {
  console.log(`image`, image)
  console.log(`name`, name)
  console.log(`price`, price)
  console.log(`quantity`, quantity)
  return (
    <div className="grid grid-cols-4 w-full  items-center shadow-sm h-[102px]">
      <div className="flex gap-4 items-center">
        <Image
          src={image}
          alt="Notebook"
          width={150}
          height={150}
          className="w-[50px] h-[50px]"
        />
        <p>{name}</p>
      </div>

      <p className="text-center font-regular">{price}</p>

      <div className="font-regular flex items-center justify-center">
        <QuantityItemsCart />
      </div>

      <p className="text-end font-regular ">{price}</p>
    </div>
  )
}
