// @ts-nocheck
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
