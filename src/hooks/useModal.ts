import { useModalStore } from "@store/useModalStore"

interface ModalOptions {
  beforeClose?: () => void | Promise<void>
  afterClose?: () => void | Promise<void>
}

export const useModal = (modalName: string, options: ModalOptions = {}) => {
  const { modalState, setModalState } = useModalStore()
  const { beforeClose, afterClose } = options

  const isOpen = modalState[modalName]
  const onOpen = () => {
    setModalState({ [modalName]: true })
  }

  const onClose = async () => {
    await beforeClose?.()
    setModalState({ [modalName]: false })
    await afterClose?.()
  }

  return { isOpen, onOpen, onClose }
}
