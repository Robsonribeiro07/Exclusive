import { useMemo } from 'react'

type _ProductsPrice = {
  price: number
}[]
interface _TotalProducts {
  total: number
}
export function useGetTotalCart({ products }: { products: _ProductsPrice }) {
  const total = useMemo(() => {
    return products.reduce((acc, cur) => acc + cur.price, 0)
  }, [products])

  return { total }
}
