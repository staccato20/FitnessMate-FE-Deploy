// < 가로길이가 긴 버튼 >
import * as S from "./StyledButton"

function BigButton({ backcolor, fontcolor, children, onClick }) {
  return (
    <S.BigButtonWrapper
      backcolor={backcolor}
      fontcolor={fontcolor}
      onClick={onClick}>
      {children}
    </S.BigButtonWrapper>
  )
}

export default BigButton
