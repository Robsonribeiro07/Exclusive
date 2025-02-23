import { NextRequest, NextResponse } from 'next/server'
import Jwt from 'jsonwebtoken'
import connectDb from '@/lib/mongodb'
import User from '@/lib/models/user'

export async function GET(request: NextRequest) {
  const token = request.headers.get('Authorization')?.split(' ')[1]

  console.log(token)
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const { email } = Jwt.verify(
    token!,
    process.env.NEXT_PUBLIC_JWT_SECRET_KEY!
  ) as {
    email: string
  }

  await connectDb()

  const user = await User.findOne({ email })

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 })
  }

  return NextResponse.json({ user })
}
