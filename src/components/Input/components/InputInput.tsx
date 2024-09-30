// @ts-nocheck
import IconButton from "@components/IconButton/IconButton.js"

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
