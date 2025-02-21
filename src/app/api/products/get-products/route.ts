import { NextResponse } from 'next/server'

interface Products {
  id: number
  title: string
  price: number
  image: string
}

const products: Products[] = [
  {
    id: 1,
    title: 'ASUS FHD Gaming Laptop',
    price: 960,
    image:
      'https://res.cloudinary.com/ddrbxo7pj/image/upload/fl_preserve_transparency/v1740153479/Notebook_rysdul.jpg?_s=public-apps',
  },
  {
    id: 2,
    title: 'RGB liquid CPU Cooler',
    price: 100,
    image:
      'https://res.cloudinary.com/ddrbxo7pj/image/upload/v1740153478/Frame_610_hmlwu9.png',
  },
  {
    id: 3,
    title: 'GP11 Shooter USB Gamepad',
    price: 143,
    image:
      'https://res.cloudinary.com/ddrbxo7pj/image/upload/v1740153478/GP11_PRD3_1_mljke8.png',
  },
  {
    id: 4,
    title: 'Quilted Satin Jacket',
    price: 980,
    image:
      'https://res.cloudinary.com/ddrbxo7pj/image/upload/v1740153478/Frame_608_oq4tkm.png',
  },
]

export async function GET() {
  return NextResponse.json({ products: products })
}
