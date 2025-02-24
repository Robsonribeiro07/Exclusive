import { create } from 'zustand'

interface usageCouponState {
  coupon: {
    NameCodeCoupon: string | null
    TotalAmount: number | null
  }
  handleCoupon: ({}: { NameCodeCoupon: string; TotalAmount: number }) => void
}

export const useStateCoupon = create<usageCouponState>((set) => ({
  coupon: {
    NameCodeCoupon: null,
    TotalAmount: null,
  },
  handleCoupon({ NameCodeCoupon, TotalAmount }) {
    set({
      coupon: {
        NameCodeCoupon,
        TotalAmount,
      },
    })
  },
}))
