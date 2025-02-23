import apiProducts from '@/lib/axios/products'

export interface AddProductCartProps {
  productId: string
  title: string
  price: number
  image: string
  token: string
  _id: string
}

export async function AddProductCart({
  image,
  price,
  title,
  productId,
  token,
}: AddProductCartProps) {
  try {
    const response = await apiProducts.post(
      '/add-products-cart',
      {
        image,
        price,
        title,
        productId,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )

    return response.data
  } catch (error) {
    console.log(error)
  }
}
