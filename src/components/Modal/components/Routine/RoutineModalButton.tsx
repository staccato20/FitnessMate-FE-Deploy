import RoundButton from "@components/Button/RoundButton"

interface RecommendModalButtonProps {
  onOpen: () => void
}
const RecommendModalButton = ({ onOpen }: RecommendModalButtonProps) => {
  return (
    <RoundButton
      leftIcon="Add"
      variant="blue"
      size="small"
      onClick={onOpen}>
      운동 루틴
    </RoundButton>
  )
}

export default RecommendModalButton
