import { create } from "zustand"

export interface SignUpState {
    isReadyAccount: boolean
    setIsReadyAccount: () => void
    setIsNotReadyAccount: () => void
    
}

export const useSignUpState = create<SignUpState>((set) => ({
    isReadyAccount: false,
    setIsReadyAccount: () => set({ isReadyAccount: true }),
    setIsNotReadyAccount: () => set({ isReadyAccount: false }),
}))
