'use server'
import api from '@/lib/axios/axios'
import { cookies } from 'next/headers'

interface _CreateInformationProfileType {
  nome: string
  sobrenome: string
  cpf: string
  tel: number
  senha: string
}

export async function CreateInformationProfile({
  nome,
  senha,
  sobrenome,
  cpf,
  tel,
}: _CreateInformationProfileType) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  if (!token?.value) {
    throw new Error('Token não encontrado')
  }

  try {
    const response = await api.post(
      '/auth/profile-information',
      { nome, sobrenome, cpf, tel, senha }, // ✅ O body da requisição deve ser passado diretamente aqui
      {
        headers: {
          Authorization: `Bearer ${token.value}`, // ✅ Headers devem estar no segundo argumento do axios.post
        },
      }
    )

    if (response.status === 200 && response.data.token) {
      const token = response.data.token
      cookieStore.set('token', token, {
        path: '/',
      })
    }

    return response.data
  } catch (error) {
    console.error('Erro na requisição:', error)
    throw new Error('Erro ao enviar informações do perfil')
  }
}
