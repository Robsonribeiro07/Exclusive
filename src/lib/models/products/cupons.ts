import mongoose, { Schema, models } from 'mongoose'

interface Icoupon {
  discount: number
  code: string
  type: 'percentage' | 'fixed'
  minPurchase?: number
  maxDiscount?: number
  expirationDate: Date
  isActive: boolean
  usageLimit?: number
  useBy: string[]
}

const cupponSchema = new Schema<Icoupon>({
  discount: { type: Number, required: true },
  code: { type: String, required: true, unique: true },
  type: { type: String, enum: ['percentage', 'fixed'], required: true },
  minPurchase: { type: Number },
  maxDiscount: { type: Number },
  expirationDate: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
  usageLimit: { type: Number },
  useBy: { type: [String], default: [] },
})

export const coupon =
  models.Coupon || mongoose.model<Icoupon>('Coupon', cupponSchema)
