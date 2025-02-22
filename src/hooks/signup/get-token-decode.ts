import { useEffect, useState } from 'react'
import cookies from 'js-cookie'
import { decodeToken } from '@/functions/middleware/decode-token'

export function useGetTokenDecode() {
  const [tokenDecode, setTokenDecode] = useState<{
    progress: string
    progressCompletion: string
    email: string
    name: string
  } | null>(null)
  const token = cookies.get('token')

  useEffect(() => {
    async function getTokenDecode() {
      if (!token) return

      const decodedToken = await decodeToken(token)

      setTokenDecode(decodedToken)
    }

    getTokenDecode()
  }, [token])

  return {
    tokenDecode,
  }
}
