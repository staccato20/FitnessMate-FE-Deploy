import Button from "@components/Button/Button"

interface RoutineInfoModalButtonProps {
  onOpen: () => void
  onClose: () => void
}

const RoutineInfoModalButton = ({
  onOpen,
  onClose,
}: RoutineInfoModalButtonProps) => {
  return (
    <Button
      variant="main"
      size="full"
      onClick={() => {
        onOpen()
        onClose()
      }}>
      다음
    </Button>
  )
}

export default RoutineInfoModalButton
