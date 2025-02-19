import { hashPassword } from '@/lib/auth/hashPassword'
import User, { UserType } from '@/lib/models/user'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY

async function POST(req: Request) {
  const progressStep = 'step2_andress'

  try {
    //   const body = await req.json()

    const authToken = req.headers.get('Authorization')

    const body = await req.json()
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
      const { nome, sobrenome, cpf, tel, senha } = body as {
        nome: string
        sobrenome: string
        cpf: string
        senha: string
        tel: number
      }

      const updateUser: Partial<UserType> = {}

      if (nome) updateUser.name = nome
      if (sobrenome) updateUser.sobrenome = sobrenome
      if (cpf) updateUser.cpf = cpf
      if (tel) updateUser.tel = tel
      if (senha) updateUser.password = await hashPassword(senha)

      await User.updateOne({ email: decoedToken.email }, { $set: updateUser })

      const UpdateToken = {
        email: decoedToken.email,
        name: nome,
        sobrenome: sobrenome,
        progress: progressStep,
      }

      const token = jwt.sign(UpdateToken, secretKey as string)

      return NextResponse.json(
        { token: token, redirectUrl: '/auth/sign-in/' + progressStep },
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
