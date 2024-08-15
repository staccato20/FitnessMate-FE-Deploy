import { ButtonHTMLAttributes } from "react"

import styled, { Interpolation, css } from "styled-components"

export type Variant = "main" | "weak" | "grey"
export type Size = "sm" | "md" | "lg"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant
  size: Size
  fullWidth: boolean
  sizeStyle: Interpolation<object>
  variantStyle: Interpolation<object>
}

export type Props = Partial<ButtonProps>

const StyledButton = styled.button<Props>`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}
  display: inline-flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  position: relative;
  min-width: 108px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const SIZES = {
  sm: css`
    padding: 10px 12px;
    font-size: 14px;
  `,
  md: css`
    padding: 14px 24px;
    font-size: 15px;
  `,
  lg: css`
    padding: 17px 24px;
    font-size: 17px;
  `,
}

const VARIANTS = {
  main: css`
    color: #fff;
    background-color: #0b98ff;
    &:hover {
      color: #0a89e5;
    }
  `,
  weak: css`
    color: #0b98ff;
    background-color: #d2ecff;
    &:hover {
      color: #d9eefe;
    }
  `,
  grey: css`
    color: #4e5968;
    background-color: #e4eaf0;
    &:hover {
      color: #a2b2c2;
    }
  `,
}

const ButtonBase = (
  disabled: boolean,
  size: Size,
  variant: Variant,
  children: string,
) => {
  const sizeStyle = SIZES[size]
  const variantStyle = VARIANTS[variant]
  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}>
      {children}
    </StyledButton>
  )
}

export default ButtonBase
