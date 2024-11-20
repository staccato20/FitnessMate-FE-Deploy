import { LabelHTMLAttributes, PropsWithChildren } from "react"

import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean
}

const InputLabel = ({
  children,
  isRequired = false,
  ...props
}: PropsWithChildren<InputLabelProps>) => {
  return (
    <InputName {...props}>
      {children}
      {isRequired && <EseentialSymbol>*</EseentialSymbol>}
    </InputName>
  )
}

export default InputLabel

const InputName = styled.label`
  color: ${theme.Netural990};
  ${fonts.b6};
  display: flex;
  gap: 5px;
`

const EseentialSymbol = styled.span`
  color: ${theme.Error};
  ${fonts.b6};
`
