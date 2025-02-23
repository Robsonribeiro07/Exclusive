'use client'
import { Button } from '@/components/ui/button'
import { ApplyCuppomCart } from '../../cart/footer/apply-cuppom'
import { ItemsCart } from './items-cart'
import { SelectTypePayment } from './select-type-payment'
import { Control, Controller } from 'react-hook-form'
import { CheckoutDetailsType } from '@/hooks/checkout/use-hook-form'
import { Product } from '@/api/products/get-products'
import { useGetTotalCart } from '@/hooks/checkout/use-get-total-cart'
export function ContentCheckoutBank({
  control,
  products,
}: {
  control: Control<CheckoutDetailsType>
  products: Product[]
}) {
  const { total } = useGetTotalCart({ products: products.slice(0, 4) })
  return (
    <div className="flex flex-col  w-[26.9375rem] mx-auto">
      <div className="flex flex-col gap-3">
        {products.slice(0, 4).map((item) => {
          return (
            <ItemsCart
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.images[0]}
            />
          )
        })}
      </div>

      <div className="flex justify-between border-b border-borderGray py-4 font-regular text-base">
        <h2>Subtotal:</h2>
        <p>R$ {total.toFixed(2)}</p>
      </div>

      <div className="flex justify-between border-b border-borderGray py-4 font-regular text-base">
        <h2>Shipping:</h2>
        <p>Free</p>
      </div>

      <div className="flex justify-between py-4 font-regular text-base">
        <h2>Total:</h2>
        <p>R$ 100,00</p>
      </div>

      <div className="flex gap-5 flex-col">
        {
          <Controller
            name="typePayment"
            control={control}
            render={({ field }) => {
              const { onChange, value } = field
              return <SelectTypePayment onChange={onChange} value={value} />
            }}
          />
        }

        <ApplyCuppomCart />
      </div>

      <Button
        className="bg-buttonRed rounded text-xs font-medium w-[10rem] h-[3rem] hover:bg-buttonRed/80 mt-5"
        type="submit"
      >
        Place Order
      </Button>
    </div>
  )
}
