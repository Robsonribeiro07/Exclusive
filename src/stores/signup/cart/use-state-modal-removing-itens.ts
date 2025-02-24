import { create } from 'zustand'

interface useStateModelRemovingItems {
  open: boolean
  toogle: () => void
  close: () => void
  setOpen: () => void
}

export const useStateModelRemovingItems = create<useStateModelRemovingItems>(
  (set) => ({
    open: false,
    toogle: () => set({ open: !open }),
    close: () => set({ open: false }),
    setOpen: () => set({ open: true }),
  })
)
