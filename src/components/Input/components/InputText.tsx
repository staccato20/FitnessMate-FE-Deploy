import { PropsWithChildren } from "react"

import * as S from "../StyledInput"

const InputText = ({ children }: PropsWithChildren) => {
  return <S.Text>{children}</S.Text>
}

export default InputText
