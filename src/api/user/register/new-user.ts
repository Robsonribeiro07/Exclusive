'use server'

import { cookies } from 'next/headers'
import { decodeToken } from '@/functions/middleware/decode-token'

export async function NewUser(formData: FormData) {
  const email = formData.get('email')?.toString()

  const cookiesStore = await cookies()

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/auth/new-user`,
      {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const data: {
      sucess: string
      redirectUrl: string
      status: string
      error: string
      token: string
      progreessCompletion: string
    } = await response.json()

    if (data.error === 'User already exists' && data.token) {
      const decodedToken: {
        email: string
        name: string
        progress: string
        progreessCompletion: string
      } = await decodeToken(data.token)

      return {
        error: 'User already exists',
        token: data.token,
        decodedToken: decodedToken,
        progreessCompletion: data.progreessCompletion,
      }
    }

    if (data.token) {
      cookiesStore.set('token', data.token, {
        sameSite: 'strict',
        path: '/',
      })
    }

    return { data }
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Erro ao criar usuário'
    )
  }
}
