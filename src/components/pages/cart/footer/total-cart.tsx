'use client'
import { Button } from '@/components/ui/button'
import { useGetTotalCart } from '@/hooks/cart/use-get-total-cart'

export function TotalCart() {
  const { TotalAmount } = useGetTotalCart()

  console.log(TotalAmount)
  return (
    <div className="w-[25.375rem] h-[18.25rem] border-2  border-black rounded p-3 flex flex-col  ">
      <h1 className="text-[1.3rem] font-medium">Cart Total</h1>

      <div className="flex justify-between border-b border-borderGray py-4 font-regular text-base">
        <h2>Subtotal:</h2>
        <p>R$ {TotalAmount.toFixed(2)}</p>
      </div>

      <div className="flex justify-between border-b border-borderGray py-4 font-regular text-base">
        <h2>Shipping:</h2>
        <p>Free</p>
      </div>

      <div className="flex justify-between py-4 font-regular text-base">
        <h2>Total:</h2>
        <p>R${TotalAmount.toFixed(2)}</p>
      </div>

      <Button className="w-[14.25rem] self-center py-7 rounded bg-buttonRed hover:bg-buttonRed/90">
        <p>Checkout</p>
      </Button>
    </div>
  )
}
