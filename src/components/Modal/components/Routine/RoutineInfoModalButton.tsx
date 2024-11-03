import Button from "@components/Button/Button"

interface RoutineInfoModalButtonProps {
  onOpen: () => void
  onClose: () => void
  saveRoutineState: () => void
}

const RoutineInfoModalButton = ({
  onOpen,
  onClose,
  saveRoutineState,
}: RoutineInfoModalButtonProps) => {
  return (
    <Button
      variant="main"
      size="full"
      onClick={() => {
        onOpen()
        onClose()
        saveRoutineState()
      }}>
      다음
    </Button>
  )
}

export default RoutineInfoModalButton
