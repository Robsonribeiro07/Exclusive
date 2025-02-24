import { create } from 'zustand'

interface useTotalCart {
  TotalAmount: number
  setTotalAmount: (total: number) => void
}
export const useTotalCart = create<useTotalCart>((set) => ({
  TotalAmount: 0,
  setTotalAmount: (total) => set({ TotalAmount: total }),
}))
