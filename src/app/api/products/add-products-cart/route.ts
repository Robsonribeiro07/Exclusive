import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import connectDb from '@/lib/mongodb'
import { Cart, CartType } from '@/lib/models/cart'
import User from '@/lib/models/user'
import { z } from 'zod'

const producSchema = z.object({
  productId: z.string().min(1, 'Product ID is required'),
  title: z.string().min(1, 'Title is required'),
  price: z.number().min(1, 'Price must be greater than 0'),
  image: z.string().url('Invalid image URL'),
})
export async function POST(request: NextRequest) {
  const data = await request.json()

  if (!data || !data.productId) {
    return NextResponse.json({ error: 'Invalid product data' }, { status: 400 })
  }

  const token = request.headers.get('authorization')?.split(' ')[1]

  const validationData = producSchema.safeParse(data)

  if (!validationData.success) {
    return NextResponse.json({ error: 'Invalid product data' }, { status: 400 })
  }

  const { productId, title, price, image } = validationData.data

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  await connectDb()

  let decodedToken
  try {
    decodedToken = jwt.verify(
      token,
      process.env.NEXT_PUBLIC_JWT_SECRET_KEY!
    ) as {
      email: string
    }
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  const user = await User.findOne({ email: decodedToken.email })

  const cart = (await Cart.findOne({ userId: user._id })) as CartType
  if (!cart) {
    const newCart = new Cart({
      userId: user._id,
      products: [
        {
          productId: data.productId,
          title: data.title,
          price: data.price,
          image: data.image,
        },
      ],
    })
    await newCart.save()

    return NextResponse.json(
      { message: 'Product added to cart' },
      { status: 200 }
    )
  }
  const existingProduct = cart.products.find(
    (product) => productId === product.productId
  )

  if (existingProduct) {
    await Cart.updateOne(
      { userId: user._id, 'products.productId': productId },
      {
        $inc: { 'products.$.quantity': 1 },
      }
    )
  } else {
    await Cart.updateOne(
      { userId: user._id },
      { $push: { products: { productId, title, price, image, quantity: 1 } } }
    )
  }
  return NextResponse.json(
    { message: 'Product added to cart' },
    { status: 200 }
  )
}
