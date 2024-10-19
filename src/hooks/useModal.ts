import { useModalStore } from "@store/useModalStore"

export const useModal = (modalName: string) => {
  const { modalState, setModalState } = useModalStore()
  const isOpen = modalState[modalName]
  const onOpen = () => {
    setModalState({ [modalName]: true })
  }

  const onClose = () => {
    setModalState({ [modalName]: false })
  }

  return { isOpen, onOpen, onClose }
}
