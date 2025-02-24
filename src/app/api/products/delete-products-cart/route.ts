import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import jwt from 'jsonwebtoken'
import { Cart, CartType } from '@/lib/models/cart'
import { HydratedDocument } from 'mongoose'

const SchemaDelete = z.object({
  productId: z.string().min(1),
})
export async function DELETE(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1]

  if (!token)
    return NextResponse.json({ message: 'Token necessario' }, { status: 400 })

  const data = await req.json()
  const validationData = SchemaDelete.safeParse(data)

  if (!validationData.success)
    return NextResponse.json({ message: 'Dados Invalidos' }, { status: 400 })

  const { productId } = validationData.data

  try {
    const decodedToken = jwt.verify(
      token,
      process.env.NEXT_PUBLIC_SECRET_JWT_KEY!
    ) as {
      id: string
    }

    const cart = (await Cart.findOne({
      userId: decodedToken.id,
    })) as HydratedDocument<CartType> | null

    if (!cart)
      return NextResponse.json(
        { message: 'Carrinho nao encontrado' },
        { status: 400 }
      )

    cart.products.pull({ _id: productId })
    await cart.save()

    return NextResponse.json(
      { message: 'Product removed successfully' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json({ message: 'Erro interno' }, { status: 500 })
  }
}
