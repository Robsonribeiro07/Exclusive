import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import connectDb from '@/lib/mongodb'
import { Cart, CartType } from '@/lib/models/cart'
import { HydratedDocument } from 'mongoose'
import { z } from 'zod'

const ChangeQuantitySchema = z.object({
  updates: z.object({
    value: z.number(),
    typeChanger: z.enum(['increase', 'decrease', 'Replace']),
    productId: z.string(),
  }),
})
export async function PATCH(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1]

  const body = await req.json()

  const ValiddationData = ChangeQuantitySchema.safeParse(body)

  if (!ValiddationData.success)
    return NextResponse.json({ message: 'Dados Invalidos' }, { status: 400 })

  const { data } = ValiddationData

  const {
    updates: { value, typeChanger, productId },
  } = data

  if (!token)
    return NextResponse.json({ message: 'Invalid Token' }, { status: 400 })

  await connectDb()
  try {
    const tokenDecoded = jwt.verify(
      token,
      process.env.NEXT_PUBLIC_JWT_SECRET_KEY!
    ) as { id: string }

    const cart = (await Cart.findOne({
      userId: tokenDecoded.id,
    })) as HydratedDocument<CartType> | null

    if (!cart) {
      return NextResponse.json(
        { message: 'Error ao encontrar carrinho' },
        { status: 404 }
      )
    }

    const product = cart.products.find((p) => p._id.toString() === productId)

    if (!product) {
      return NextResponse.json(
        { message: 'Produto nao encontrado no carrinho' },
        { status: 404 }
      )
    }

    product.quantity =
      typeChanger === 'increase'
        ? product.quantity + value
        : typeChanger === 'Replace'
          ? (product.quantity = value)
          : product.quantity - value

    await cart.save()

    return NextResponse.json(
      { message: 'Cart Atualizado com sucess' },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error' }, { status: 500 })
  }
}
