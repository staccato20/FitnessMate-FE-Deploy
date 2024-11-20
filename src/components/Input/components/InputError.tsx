import { PropsWithChildren } from "react"

import styled from "styled-components"

import theme from "@styles/theme"

const InputError = ({ children }: PropsWithChildren) => {
  return <Warning>{children}</Warning>
}
export default InputError

const Warning = styled.span`
  color: ${theme.Error};
  font-size: 16px;
`
