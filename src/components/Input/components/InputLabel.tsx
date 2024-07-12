// @ts-nocheck
import * as S from "../StyledInput"

const InputLabel = ({ children, isRequired, ...props }) => {
  return (
    <S.InputName {...props}>
      {children}
      {isRequired && <S.EseentialSymbol>*</S.EseentialSymbol>}
    </S.InputName>
  )
}

export default InputLabel
