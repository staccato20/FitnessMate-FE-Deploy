import RoundButton from "@components/Button/RoundButton"

interface RecommendModalButtonProps {
  onOpen: () => void
  setIsSelectedRoutine: (workoutId: number) => void
  workoutId: number
}
const RecommendModalButton = ({
  onOpen,
  setIsSelectedRoutine,
  workoutId,
}: RecommendModalButtonProps) => {
  const handleRoutineModalButton = () => {
    onOpen()
    setIsSelectedRoutine(workoutId)
  }
  return (
    <RoundButton
      leftIcon="Add"
      variant="blue"
      size="small"
      onClick={handleRoutineModalButton}>
      운동 루틴
    </RoundButton>
  )
}

export default RecommendModalButton
