import { NextRequest, NextResponse } from 'next/server'
import { coupon } from '@/lib/models/products/cupons' // Supondo que seu modelo já está configurado
import connectDb from '@/lib/mongodb'

export async function POST(req: NextRequest) {
  console.log('ok')
  await connectDb()
  try {
    const fakeCoupon = await coupon.create({
      code: 'FAKE50',
      discount: 50,
      type: 'percentage',
      minPurchase: 100,
      maxDiscount: 75,
      expirationDate: new Date('2025-12-31T23:59:59.999Z'),
      isActive: true,
      usageLimit: 200,
      useBy: [],
    })

    return NextResponse.json(
      { message: 'Cupom fake criado com sucesso!', coupon: fakeCoupon },
      { status: 201 }
    )
  } catch (error) {
    console.error('Erro ao criar cupom:', error)
    return NextResponse.json(
      { message: 'Erro ao criar cupom', error },
      { status: 500 }
    )
  }
}
