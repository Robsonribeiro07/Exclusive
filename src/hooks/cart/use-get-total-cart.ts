'use client'
import { useEffect, useMemo } from 'react'
import { useGetProductsCart } from './use-get-products'
import { useStateCoupon } from '@/stores/products/cart/usage-coupon'
import { useTotalCart } from '@/stores/cart/use-state-total-car'

export function useGetTotalCart() {
  const { products } = useGetProductsCart()
  const { coupon } = useStateCoupon()

  console.log(products)
  const { setTotalAmount, TotalAmount } = useTotalCart()

  const total = useMemo(() => {
    if (!products || !products.products) return 0

    return products.products.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity
    }, 0)
  }, [products])

  const totalPrice = coupon?.TotalAmount ?? total

  console.log(totalPrice)
  useEffect(() => {
    setTotalAmount(totalPrice)
  }, [setTotalAmount, totalPrice])

  return {
    TotalAmount,
  }
}
