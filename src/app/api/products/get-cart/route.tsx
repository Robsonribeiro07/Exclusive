import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { Cart, CartType } from '@/lib/models/cart'
import connectDb from '@/lib/mongodb'

export async function GET(req: Request) {
  await connectDb()

  const token = req.headers.get('authorization')?.split(' ')[1]

  if (!token) {
    return NextResponse.json({ message: 'Token Invalid' }, { status: 400 })
  }

  try {
    const decodedToken = jwt.verify(
      token,
      process.env.NEXT_PUBLIC_JWT_SECRET_KEY!
    ) as { id: string }

    // 🔹 Procura o carrinho, se não existir, cria um novo
    const cart = (await Cart.findOneAndUpdate(
      { userId: decodedToken.id }, // Filtro: busca pelo ID do usuário
      {
        $setOnInsert: { userId: decodedToken.id, products: [] },
      },
      {
        upsert: true,
        new: true,
      }
    )) as CartType
    console.log(`cart ${cart}`)

    return NextResponse.json(cart)
  } catch (e) {
    console.log(e)
    return NextResponse.json({ message: 'Token Invalid' }, { status: 400 })
  }
}
