import Bottom from "@components/Bottom/Bottom"
import RoundButton from "@components/Button/RoundButton"

interface FooterProps {
  handleNextPage: () => void
  selectedBodyParts: number[]
}

const Footer = ({ handleNextPage, selectedBodyParts }: FooterProps) => {
  const isReady = selectedBodyParts.some((v) => v)
  return (
    <Bottom flex="space-between">
      <Bottom.Text>
        {selectedBodyParts.length}개
        <Bottom.SubText> 부위 선택됨</Bottom.SubText>
      </Bottom.Text>
      <RoundButton
        onClick={handleNextPage}
        variant="black"
        size="big"
        rightIcon="RightArrowWhite"
        disabled={!isReady}>
        다음
      </RoundButton>
    </Bottom>
  )
}

export default Footer
