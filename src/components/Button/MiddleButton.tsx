// @ts-nocheck
import * as S from "./StyledButton"

function MiddleButton({ children, onClick, $isValid, ...props }) {
  return (
    <S.MiddleButtonWrapper
      onClick={onClick}
      $isValid={$isValid}
      {...props}>
      {children}
    </S.MiddleButtonWrapper>
  )
}

export default MiddleButton
