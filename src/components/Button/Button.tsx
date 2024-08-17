import { ButtonHTMLAttributes } from "react"

import styled, { Interpolation, css } from "styled-components"

export type Variant = "main" | "weak" | "grey" | "text"
export type Size = "sm" | "md" | "lg"

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant
  size: Size
  sizeStyle: Interpolation<object>
  variantStyle: Interpolation<object>
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  size?: Size
  variant?: Variant
  children?: string
}

export type Props = Partial<StyledButtonProps>

const StyledButton = styled.button<Props>`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}
  display: inline-flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  position: relative;
  min-width: 108px;
  border: none;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:disabled {
    cursor: default;
  }
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
      background: #0f84d9;
    }
    &:disabled {
      background-color: #bbc8d6;
    }
  `,
  weak: css`
    color: #048ef1;
    background-color: #d2ecff;
    &:hover {
      background: linear-gradient(
          0deg,
          rgba(34, 37, 46, 0.06) 0%,
          rgba(34, 37, 46, 0.06) 100%
        ),
        var(--Brand-Light, #d9eefe);
    }
    &:disabled {
      background-color: #d2ecff;
    }
  `,
  grey: css`
    color: #4e5968;
    background-color: #e4eaf0;
    &:hover {
      background-color: #a2b2c2;
    }
    &:disabled {
      background-color: #f2f4f6;
    }
  `,
  text: css`
    color: #4e5968;
    background: none;
    &:hover {
      background-color: #f2f4f6;
    }
    &:disabled {
      color: #a2b2c2;
    }
  `,
}

const Button = ({
  disabled = false,
  size = "md",
  variant = "main",
  children,
}: ButtonProps) => {
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

export default Button
