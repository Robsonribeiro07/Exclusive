import User, { UserType } from '@/lib/models/user'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY

async function POST(req: Request) {
  const progress = 'step3_andress'

  try {
    //   const body = await req.json()

    const authToken = req.headers.get('Authorization')

    const body = await req.json()

    console.log(body)
    if (!authToken) {
      return NextResponse.json({ error: 'Token invalido' }, { status: 200 })
    }

    const authTokeBearear = authToken.split(' ')[1]

    const decoedToken = jwt.verify(authTokeBearear, secretKey as string) as {
      email: string
      name: string
      progress: string
    }

    if (!decoedToken) {
      return NextResponse.json({ error: 'Token invalido' }, { status: 401 })
    }

    const user = (await User.findOne({ email: decoedToken.email })) as UserType

    if (!user) {
      return NextResponse.json(
        { error: 'Usuario nao encontrado' },
        { status: 401 }
      )
    }

    try {
      const { Pais, Estado, Cidade, Endereco, CEP } = body as {
        Pais: string
        Estado: string
        Cidade: string
        Endereco: string
        CEP: number
      }

      const updateUser: Partial<UserType> = {}

      if (Pais) updateUser.pais = Pais
      if (Estado) updateUser.estado = Estado
      if (Cidade) updateUser.cidade = Cidade
      if (Endereco) updateUser.endereco = Endereco
      if (CEP) updateUser.cep = CEP
      updateUser.progressCompletion = 'false'

      await User.updateOne({ email: decoedToken.email }, updateUser)

      const UpdateToken = {
        email: decoedToken.email,
        progressCompletion: 'false',
        progress: progress,
      }

      const token = jwt.sign(UpdateToken, secretKey as string)

      return NextResponse.json(
        { token: token, redirectUrl: '/auth/sign-in/step3_storeInformation' },
        { status: 200 }
      )
    } catch {
      return NextResponse.json(
        { error: 'Erro ao atualizar dados' },
        { status: 400 }
      )
    }
  } catch {
    return NextResponse.json({ error: 'Token invalido' }, { status: 401 })
  }
}

export { POST }
