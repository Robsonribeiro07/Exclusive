import { coupon } from '@/lib/models/products/cupons'
import connectDb from '@/lib/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  await connectDb()

  const { code, userId, TotalAmount } = await req.json()

  if (!userId)
    return NextResponse.json({ message: 'token necessario' }, { status: 400 })

  try {
    const Coupon = await coupon.findOne({ code })
    console.log(Coupon)

    if (!Coupon)
      return NextResponse.json({ message: 'Coupon invalido' }, { status: 400 })

    if (!Coupon.isActive || new Date(Coupon.expirationDate) < new Date()) {
      return NextResponse.json({ message: 'Cupom expirado' }, { status: 400 })
    }
    if (Coupon.usageLimit && Coupon.useBy.length >= Coupon.usageLimit) {
      return NextResponse.json(
        { message: 'Coupon antigiu o limite do uso' },
        { status: 400 }
      )
    }
    if (Coupon.minPurchase && TotalAmount < Coupon.minPurchase) {
      return NextResponse.json({
        message: `Valor minimo e de ${Coupon.minPurchase}`,
      })
    }

    let discountValue =
      Coupon.type === 'percentage'
        ? (TotalAmount * Coupon.discount) | 100
        : Coupon.discount

    if (Coupon.maxDiscount && discountValue > Coupon.maxDiscount) {
      discountValue = Coupon.maxDiscount
    }

    Coupon.useBy.push(userId)

    await Coupon.save()

    return NextResponse.json({
      discount: discountValue,
      finalPrice: TotalAmount - discountValue,
      CodeNameCoupon: Coupon.code,
      PriceNormal: TotalAmount,
    })
  } catch {
    return NextResponse.json({ message: 'Houve um erro ao aplica o coupon' })
  }
}
