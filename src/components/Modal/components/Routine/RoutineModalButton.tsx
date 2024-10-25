import RoundButton from "@components/Button/RoundButton"

import { useModal } from "@hooks/useModal"

const RecommendModalButton = () => {
  const { onOpen } = useModal("루틴추가")
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
