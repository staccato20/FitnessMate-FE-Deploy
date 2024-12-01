import RoundButton from "@components/Button/RoundButton"
import { EmptyRoutineWrapper } from "@components/EmptyRoutine/StyledEmptyRoutine"
import Title from "@components/Title/Title"

const EmptyRoutine = () => {
  const onClick = () => {}

  return (
    <EmptyRoutineWrapper>
      <Title variant="midD">
        <Title.SubTopTitle>아직 추가한 루틴이 없어요.</Title.SubTopTitle>
        <Title.SubBottomTitle>
          나만의 운동 루틴을 만들어보세요!
        </Title.SubBottomTitle>
      </Title>
      <RoundButton
        leftIcon="Add"
        variant="black"
        size="middle"
        onClick={onClick}>
        추가하기
      </RoundButton>
    </EmptyRoutineWrapper>
  )
}

export default EmptyRoutine
