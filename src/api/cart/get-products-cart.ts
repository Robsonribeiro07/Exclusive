import apiProducts from '@/lib/axios/products'

export interface ProductsCart {
  title: string
  price: number
  image: string[]
  quantity: number
  _id: string
}
export interface ProductsCartResponse {
  _id: string
  userId: string
  createdAt: String
  updatedAt: String
  products: ProductsCart[]
}

export async function getProductsCart({
  token,
}: {
  token: string
}): Promise<ProductsCartResponse | null> {
  console.log('token', token)
  try {
    const response = await apiProducts.get('/get-cart', {
      headers: { Authorization: `Bearer ${token}` },
    })

    console.log('response', response.data)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
