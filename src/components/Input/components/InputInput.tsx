import { InputHTMLAttributes } from "react"

import styled, { Interpolation, css } from "styled-components"

import theme, { fonts } from "@styles/theme.js"

type Variant = "main" | "edit"

const VARIANTS = {
  main: css`
    padding: 16px;
    background: ${theme.Netural0};
    ${fonts.b4};
    color: ${theme.Netural900};
    border: 1px solid ${theme.Netural400};
  `,
  edit: css`
    padding: 14px;
    border: 1px solid ${theme.Netural200};
    background: ${theme.Netural100};
    color: ${theme.Netural990};
    ${fonts.b1};
  `,
}

const getBorderStyle = ($isError: boolean, $isDirty: boolean) => {
  if (!$isDirty) {
    return css``
  }

  if ($isError) {
    return css`
      border: 2px solid ${theme.Error};
    `
  }

  return css`
    border: 2px solid ${theme.Brand600};
  `
}

interface InputInputProps {
  props: InputHTMLAttributes<HTMLInputElement> & {
    $isDirty?: boolean
    $isError?: boolean
  }
  variant?: Variant
}

const InputInput = ({
  props: { $isDirty = false, $isError = false, ...rest },
  variant = "main",
}: InputInputProps) => {
  const variantStyle = VARIANTS[variant]
  const borderStyle = getBorderStyle($isError, $isDirty)
  return (
    <Input
      $isDirty={$isDirty}
      $isError={$isError}
      id={rest.name}
      $variantStyle={variantStyle}
      $borderStyle={borderStyle}
      {...rest}
    />
  )
}

export default InputInput

export const Input = styled.input<{
  $isError: boolean
  $isDirty: boolean
  $variantStyle: Interpolation<object>
  $borderStyle: Interpolation<object>
}>`
  width: 100%;
  border-radius: 8px;

  &::-webkit-input-placeholder {
    color: ${theme.Netural500};
    ${fonts.b4};
  }

  ${({ $variantStyle }) => $variantStyle};

  &:disabled {
    background: ${theme.Netural100};
    border: 1.5px solid var(--gray-20, #f2f4f6);
    color: var(--Gray-40, #b0b8c1);
  }

  ${({ $borderStyle }) => $borderStyle};
`
