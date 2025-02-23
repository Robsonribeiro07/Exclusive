import Image from 'next/image'
import { QuantityItemsCart } from './quantity'
import { useEffect, useMemo, useState } from 'react'

interface ItemsCartProps {
  image: string
  name: string
  price: number
  quantity: number
  productId: string
}
export function ItemsCart({
  image,
  name,
  price,
  quantity,
  productId,
}: ItemsCartProps) {
  const [quantityChanger, setQuantityChanger] = useState(quantity)

  const subTotal = useMemo(() => {
    return price * quantityChanger
  }, [price, quantityChanger])

  useEffect(() => {
    setQuantityChanger(quantity)
  }, [quantity])

  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantityChanger(Number(e.currentTarget.value.slice(0, 2)))
  }
  return (
    <div className="grid grid-cols-4 w-full  items-center shadow-sm h-[102px] select-none">
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
        <QuantityItemsCart
          quantityChanger={quantityChanger}
          productId={productId}
          handleSetValue={handleSetValue}
        />
      </div>

      <p className="text-end font-regulars select-none ">
        {subTotal.toFixed(2)}
      </p>
    </div>
  )
}
