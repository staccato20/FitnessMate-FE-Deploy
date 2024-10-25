import RoundButton from "@components/Button/RoundButton"

import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import { useModal } from "@hooks/useModal"

const RecommendModalButton = () => {
  const { myRoutines: routines } = useGetMyRoutines()

  const hasRoutine = routines.length > 0

  const { onOpen: addRoutine } = useModal("루틴추가")
  const { onOpen: startRoutine } = useModal("루틴시작")

  return (
    <RoundButton
      leftIcon="Add"
      variant="blue"
      size="small"
      onClick={hasRoutine ? startRoutine : addRoutine}>
      운동 루틴
    </RoundButton>
  )
}

export default RecommendModalButton
