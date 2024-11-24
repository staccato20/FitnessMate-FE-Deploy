import { InputHTMLAttributes } from "react"

import styled from "styled-components"

import theme, { fonts } from "@styles/theme.js"

interface InputInputProps {
  props: InputHTMLAttributes<HTMLInputElement> & {
    $isDirty?: boolean
    $isError?: boolean
  }
}

const InputInput = ({
  props: { $isDirty = false, $isError = false, ...rest },
}: InputInputProps) => {
  return (
    <Input
      $isDirty={$isDirty}
      $isError={$isError}
      id={rest.name}
      {...rest}
    />
  )
}

export default InputInput

export const Input = styled.input<{
  $isError: boolean
  $isDirty: boolean
}>`
  &::-webkit-input-placeholder {
    color: ${theme.Netural500};
    ${fonts.b4}
  }
  background: ${theme.Netural0};
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: ${({ $isError, $isDirty }) => getBorderStyle($isError, $isDirty)};
`

const getBorderStyle = ($isError: boolean, $isDirty: boolean) => {
  if (!$isDirty) {
    return `1px solid ${theme.Netural500}`
  }
  return $isError ? `2px solid ${theme.Error}` : `2px solid ${theme.Brand600}`
}
