import { create } from 'zustand'

interface _Cart {
  value: string
  setValue: (value: string) => void
}

export const useCart = create<_Cart>((set) => ({
  value: 'dsads',
  setValue: (value) => set({ value }),
}))
