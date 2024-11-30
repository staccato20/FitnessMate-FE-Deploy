import Icon from "@components/Icon/Icon"
import { AddRoutineButton } from "@components/Modal/components/Routine/StyledRoutineModal"

import { useModal } from "@hooks/useModal"

interface RoutineAddModalButtonProps {
  onClose: () => void
}

const RoutineAddModalButton = ({ onClose }: RoutineAddModalButtonProps) => {
  const { onOpen } = useModal("루틴생성")

  return (
    <AddRoutineButton
      onClick={() => {
        onOpen()
        onClose()
      }}>
      <Icon
        icon="AddRoundGray"
        size={32}
      />
      추가하기
    </AddRoutineButton>
  )
}

export default RoutineAddModalButton
