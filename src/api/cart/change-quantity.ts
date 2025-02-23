import apiProducts from '@/lib/axios/products'

interface ChangeQuantityCartProps {
  updates: {
    typeChanger: 'increase' | 'decrease' | 'Replace'
    value: number
    productId: string
  }
  token: string
}
export async function changeQuantityCart({
  token,
  updates,
}: ChangeQuantityCartProps) {
  const response = await apiProducts.patch(
    '/change-quantity',
    {
      updates,
    },
    {
      headers: { Authorization: `Bearear ${token}` },
    }
  )

  return response.data
}
