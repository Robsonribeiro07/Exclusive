import { useContext } from 'react'

import apiProducts from '@/lib/axios/products'

interface removeProductsCard {
  productId: string
  token: string
}

export async function handlRemoveProductCard({
  productId,
  token,
}: removeProductsCard) {
  const response = await apiProducts.delete('/remove-products', {
    data: { productId },
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  return response.data
}
