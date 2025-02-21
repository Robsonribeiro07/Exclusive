import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'

import User, { UserType } from '@/lib/models/user'
import jwt from 'jsonwebtoken'
// import User from '@/lib/models/user';

const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY

async function POST(request: Request) {
  try {
    await dbConnect()

    const body = await request.json()

    const progress = 'step1_Profile'

    // const cookie = serialize("token", token, {
    //   path: '/',
    //   sameSite: 'lax',
    // })

    const user = (await User.findOne({ email: body.email })) as UserType

    const token = jwt.sign(
      {
        email: body.email,
        progress: progress,
        progreessCompletion: 'false',
      },
      secretKey as string,
      {
        algorithm: 'HS256',
      }
    )

    if (user) {
      const tokenUser = jwt.sign(
        {
          email: body.email,
          progress: user.progressCompletion,
          progreessCompletion: user.progressCompletion,
        },
        secretKey as string
      )

      const response = Response.json(
        {
          error: 'User already exists',
          token: tokenUser,
          progreessCompletion: user.progressCompletion,
          redirectUrl: `/`,
        },
        { status: 202 }
      )

      return response
    }

    await User.create({
      email: body.email,
      progressCompletion: 'false',
    })

    const response = NextResponse.json(
      {
        sucess: 'true',
        redirectUrl: `auth/sign-in/step1_Profile?email=${body.email}`,
        token: token,
      },
      { status: 201 }
    )

    return response
  } catch (e) {
    console.log(e)
    return NextResponse.json(
      { error: 'Erro ao criar usuário' },
      { status: 500 }
    )
  }
}
async function GET() {
  try {
    await dbConnect()
  } catch {
    console.log('erro')
  }

  return NextResponse.json({ message: 'ola' })
}

export { GET, POST }
