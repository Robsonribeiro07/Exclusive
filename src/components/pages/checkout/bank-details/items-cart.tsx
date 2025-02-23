import Image from 'next/image'
interface _ItemsCart {
  title: string
  price: number
  image: string
}
export function ItemsCart({ title, price, image }: _ItemsCart) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <Image src={image} alt="product" width={30} height={30} />
        <p className="font-regular text-base">{title.slice(0, 15)}</p>
      </div>

      <p className="font-regular text-base">${price}</p>
    </div>
  )
}
