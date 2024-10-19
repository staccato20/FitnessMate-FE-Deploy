import { create } from "zustand"

export interface ModalStoreProps {
  modalState: Record<string, boolean>
  setModalState: (newState: Record<string, boolean>) => void
}

export const useModalStore = create<ModalStoreProps>((set) => ({
  modalState: {
    운동추천: false,
  },
  setModalState: (newState) =>
    set((state) => ({
      modalState: {
        ...state.modalState,
        ...newState,
      },
    })),
}))
