import apiUser from '@/lib/axios/user'

interface GetUserDetailsProps {
  token: string
}
interface UserDetailsResponse {
  user: {
    _id: string
    email: string
    progressCompletion: boolean
    createdAt: string
    updatedAt: string
    __v: number
    cpf: string
    name: string
    password: string
    sobrenome: string
    tel: number
    cep: string
    cidade: string
    endereco: string
    estado: string
    pais: string
    Categorias: string
    DescriptionStore: string
    NameStore: string
  }
}
export async function GetUserDetails({ token }: GetUserDetailsProps) {
  console.log(token)
  const response = apiUser.get<UserDetailsResponse>('/get-details', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return (await response).data
}
