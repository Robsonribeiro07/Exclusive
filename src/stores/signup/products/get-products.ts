import { create } from 'zustand'

export interface _products {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: Rating
  title: string
}

export interface Rating {
  rate: number
  count: number
}

interface _getProducts {
  products: _products[]
  setProducts: (products: _products[]) => void
}

export const useProducts = create<_getProducts>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}))
