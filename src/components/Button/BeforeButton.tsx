// < 이전 버튼 >
import * as S from "./StyledButton"

function BeforeButton({ onClick }) {
  return <S.BeforeButtonWrapper onClick={onClick}>이전</S.BeforeButtonWrapper>
}

export default BeforeButton
