import { InputHTMLAttributes } from "react"

import * as S from "../StyledInput.js"

interface InputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  // any 타입 고치기
  props: any
}

const InputInput = ({ props, ...rest }: InputInputProps) => {
  return (
    <S.Input
      {...props}
      {...rest}
    />
  )
}

export default InputInput
