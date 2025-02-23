import { useQuery } from '@tanstack/react-query'
import { GetUserDetails } from '@/api/user/data/get-user-details'
import cookies from 'js-cookie'

export function useGetDetails() {
  const token = cookies.get('token')

  const { data, isFetching } = useQuery({
    queryKey: ['user-details'],
    queryFn: () =>
      GetUserDetails({
        token: token!,
      }),
    enabled: !!token,
  })

  return { data, isFetching }
}
