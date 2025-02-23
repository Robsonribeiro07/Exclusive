import User, { UserType } from '@/lib/models/user'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY

async function POST(req: Request) {
  const progress = 'step3_storeInformation'

  try {
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
      const { NameStore, DescriptionStore, Categorias } = body as {
        NameStore: string
        DescriptionStore: string
        Categorias: string
      }

      const updateUser: Partial<UserType> = {}

      if (NameStore) updateUser.NameStore = NameStore
      if (DescriptionStore) updateUser.DescriptionStore = DescriptionStore
      if (Categorias) updateUser.Categorias = Categorias
      updateUser.progressCompletion = 'false'

      await User.updateOne({ email: decoedToken.email }, { $set: updateUser })

      const UpdateToken = {
        email: decoedToken.email,
        progressCompletion: 'true',
        progress: progress,
        id: user._id,
      }

      const token = jwt.sign(UpdateToken, secretKey as string)

      return NextResponse.json(
        { token: token, redirectUrl: '/' },
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
