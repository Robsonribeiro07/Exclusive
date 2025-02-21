import { NextResponse } from 'next/server'

interface ProductsCart {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

let productsOld: ProductsCart[] = []

export async function POST(request: Request) {
  const data = await request.json()

  productsOld = data
  return NextResponse.json(data)
}

export async function GET() {
  return NextResponse.json(productsOld)
}
