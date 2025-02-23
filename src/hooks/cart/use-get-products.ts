import { getProductsCart } from '@/api/cart/get-products-cart'
import { useQuery } from '@tanstack/react-query'
import cookies from 'js-cookie'
export function useGetProductsCart() {
  const token = cookies.get('token')
  const {
    data: products,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProductsCart({ token: token! }),
    enabled: !!token,
    staleTime: 1000 * 60 * 1,
  })

  return { products, isFetching, error }
}
