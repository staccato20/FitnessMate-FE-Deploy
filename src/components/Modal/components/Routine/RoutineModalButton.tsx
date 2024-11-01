import { useAccordion } from "@components/Accordion/Accordion"
import RoundButton from "@components/Button/RoundButton"

interface RecommendModalButtonProps {
  onOpen: () => void
}
const RecommendModalButton = ({ onOpen }: RecommendModalButtonProps) => {
  const { handleWokroutId, workoutId } = useAccordion()

  return (
    <RoundButton
      leftIcon="Add"
      variant="blue"
      size="small"
      onClick={() => {
        onOpen()
        handleWokroutId(workoutId)
      }}>
      운동 루틴
    </RoundButton>
  )
}

export default RecommendModalButton
