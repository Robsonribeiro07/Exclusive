import { decodeToken } from '@/functions/middleware/decode-token'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

interface DecodedToken {
  id: string
  email?: string
  role?: string
  exp?: number
}

export function useGetDetailsToken() {
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null)

  useEffect(() => {
    const fetchTokenDetails = async () => {
      const token = Cookies.get('token')

      if (!token) {
        setDecodedToken(null)
        return
      }

      try {
        const decoded = await decodeToken(token)
        setDecodedToken(decoded)
      } catch {
        setDecodedToken(null)
      }
    }

    fetchTokenDetails()
  }, [])

  return { decodedToken }
}
