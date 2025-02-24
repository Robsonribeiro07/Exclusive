'use client'
import { changeQuantityCart } from '@/api/cart/change-quantity'
import {
  ProductsCart,
  ProductsCartResponse,
} from '@/api/cart/get-products-cart'
import { getTotalCart } from '@/functions/cart/get-total-cart'
import queryClient from '@/lib/queryclient'
import { useTotalCart } from '@/stores/cart/use-state-total-car'
import { useMutation } from '@tanstack/react-query'
import cookies from 'js-cookie'

export function useChangeQuantity() {
  const token = cookies.get('token')

  let newQuantityUpdates: ProductsCart[]
  const { setTotalAmount } = useTotalCart()

  const { mutate } = useMutation({
    mutationFn: changeQuantityCart,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['products'],
      })
      const {
        updates: { typeChanger, value, productId },
      } = variables

      const allProduts = queryClient.getQueryData(['products'])

      if (!allProduts) {
        return { allProduts }
      }
      if (allProduts) {
        queryClient.setQueryData(['products'], (data: ProductsCartResponse) => {
          newQuantityUpdates = data.products.map((products) => {
            if (productId === products._id) {
              return {
                ...products,
                quantity:
                  typeChanger === 'increase'
                    ? products.quantity + value
                    : typeChanger === 'Replace'
                      ? (products.quantity = value)
                      : products.quantity - value,
              }
            }

            return products
          })

          const updateTotalCart = getTotalCart({
            products: newQuantityUpdates,
          })

          setTotalAmount(updateTotalCart)
          return {
            ...data,
            products: newQuantityUpdates,
          }
        })
      }

      return { allProduts }
    },
  })

  const handleChangeQuantity = ({
    value = 1,
    typeChanger,
    productId,
  }: {
    value?: number
    typeChanger: 'increase' | 'decrease' | 'Replace'
    productId: string
  }) => {
    mutate({
      updates: {
        value,
        typeChanger,
        productId,
      },
      token: token!,
    })
  }
  return {
    handleChangeQuantity,
  }
}
