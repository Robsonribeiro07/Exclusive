'use client'
import { handleInsertCoupon } from '@/api/cart/insert-coupon'
import { Button } from '@/components/ui/button'
import { useGetTotalCart } from '@/hooks/cart/use-get-total-cart'
import { useGetDetailsToken } from '@/hooks/user/user-get-details-token'
import { useStateCoupon } from '@/stores/products/cart/usage-coupon'
import { useState } from 'react'
import { toast } from 'sonner'

export function ApplyCuppomCart() {
  const [code, setCode] = useState('')

  const { decodedToken } = useGetDetailsToken()
  const { TotalAmount } = useGetTotalCart()

  const { handleCoupon } = useStateCoupon()

  const handleApplyCuppon = async () => {
    if (!decodedToken) return
    const response = await handleInsertCoupon({
      code,
      userId: decodedToken.id,
      TotalAmount: Number(TotalAmount),
    })
    if (response.success) {
      toast.success('Cupon Aplicado com sucesso')
      handleCoupon({
        NameCodeCoupon: response.CodeNameCoupon!,
        TotalAmount: response.finalPrice!,
      })
    }
    toast.error(response.error)
  }
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Coupon Code"
        className="w-[18.75rem h-[2.8rem] border border-borderGray rounded text-base placeholder:text-sm px-4"
        value={code}
        onChange={(e) => setCode(e.currentTarget.value)}
      />

      <Button
        className="bg-buttonRed rounded text-xs font-medium w-[12.5rem] h-[2.8rem] hover:bg-buttonRed/80"
        onClick={handleApplyCuppon}
      >
        Apply Coupon
      </Button>
    </div>
  )
}
