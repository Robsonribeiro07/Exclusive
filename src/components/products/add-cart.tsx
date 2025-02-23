import { ShoppingCart } from 'lucide-react'

interface AddCartProps {
  showAddCart: boolean
  handleAddProduct: () => void
}
export function AddCart({ showAddCart, handleAddProduct }: AddCartProps) {
  const showCart = showAddCart ? 'bottom-0' : 'bottom-[-2.3rem]'

  return (
    <button
      className={`w-full bg-black text-white absolute left-0 ${showCart} h-[2.5rem] transition-all duration-300 flex items-center justify-center gap-2`}
      onClick={handleAddProduct}
      data-testid="add-cart-button"
    >
      <ShoppingCart size={20} />
      <p>Add to Cart</p>
    </button>
  )
}
