import { changeQuantityCart } from '@/api/cart/change-quantity'
import { ProductsCartResponse } from '@/api/cart/get-products-cart'
import queryClient from '@/lib/queryclient'
import { useMutation } from '@tanstack/react-query'
import cookies from 'js-cookie'

export function useChangeQuantity() {
  const token = cookies.get('token')

  const { mutate } = useMutation({
    mutationFn: changeQuantityCart,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['products'],
      })
      const {
        updates: { typeChanger, value, productId },
      } = variables

      console.log(productId)

      const allProduts = queryClient.getQueryData(['products'])

      if (!allProduts) {
        return { allProduts }
      }
      if (allProduts) {
        queryClient.setQueryData(['products'], (data: ProductsCartResponse) => {
          const newQuantityUpdates = data.products.map((products) => {
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
