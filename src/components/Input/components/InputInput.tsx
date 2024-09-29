// @ts-nocheck
import * as S from "../StyledInput.js"

const InputInput = ({ type, props, ...rest }) => {
  return (
    <S.Input
      type={type}
      {...props}
      {...rest}
    />
  )
}

export default InputInput
