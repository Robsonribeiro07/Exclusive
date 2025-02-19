interface AddCartProps {
  showAddCart: boolean
}
export function AddCart({ showAddCart }: AddCartProps) {
  const showCart = showAddCart ? 'bottom-0' : 'bottom-[-2.3rem]'
  return (
    <button
      className={`w-full bg-black text-white absolute left-0 ${showCart} h-[2.3rem] transition-all duration-300`}
    >
      Add to Cart
    </button>
  )
}
