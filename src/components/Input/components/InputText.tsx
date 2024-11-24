import { PropsWithChildren } from "react"

import styled from "styled-components"

import theme from "@styles/theme"

const InputText = ({ children }: PropsWithChildren) => {
  return <Text>{children}</Text>
}

export default InputText

const Text = styled.span`
  ${theme.Netural900};
  font-size: 15px;
  font-weight: 400;
`
