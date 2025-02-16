import { create } from "zustand";

interface ModalExistingUserNotCompletionProfile {
    open: boolean,
    setOpen: () => void,
    toggle: () => void,
    close: () => void,
}

export const useModalExistingUserNotCompletionProfile = create<ModalExistingUserNotCompletionProfile>((set) => ({
    open: false,
    setOpen: () => set({open: true}),
    toggle: () => set((state) => ({open: !state.open})),
    close: () => set({open: false}),
}))
