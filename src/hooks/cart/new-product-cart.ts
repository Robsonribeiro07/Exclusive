import { AddProductCart } from '@/api/cart/add-product-cart'
import { ProductsCartResponse } from '@/api/cart/get-products-cart'
import queryClient from '@/lib/queryclient'
import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { toast } from 'sonner'
interface AddProductCartProps {
  productId: string
  title: string
  price: number
  image: string
  _id: string
}
export function useNewProductCart() {
  const token = Cookies.get('token')
  const { mutate } = useMutation({
    mutationFn: AddProductCart,
    onMutate: (variables) => {
      const { image, price, productId, title, _id } = variables

      const allProduts = queryClient.getQueryData<ProductsCartResponse>([
        'products',
      ])

      if (!allProduts) {
        return allProduts
      }

      queryClient.setQueryData(['products'], (data: ProductsCartResponse) => {
        const existingProducts = data.products.find((p) => p._id === _id)

        if (existingProducts) {
          existingProducts.quantity = existingProducts.quantity + 1
        }

        toast.success('Item adiciona no carrinho com sucess')
        toast.dismiss()
        const newProducts = {
          image: [image],
          productId,
          price,
          title,
          _id,
          quantity: 1,
        }

        return {
          ...data,
          products: [newProducts, ...data.products],
        }
      })
      return { allProduts }
    },

    onError(_, __, context) {
      toast.error('Error ao adiciona pedido ao carrinho')
      if (context?.allProduts) {
        queryClient.setQueryData(['products'], context.allProduts)
      }
    },
  })

  const handleAddNewProducts = ({
    image,
    price,
    title,
    productId,
    _id,
  }: AddProductCartProps) => {
    mutate({
      image,
      price,
      title,
      token: token!,
      productId,
      _id,
    })
  }

  return {
    handleAddNewProducts,
  }
}
