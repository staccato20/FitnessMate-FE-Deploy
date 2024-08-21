import { ButtonHTMLAttributes } from "react"

import styled, { Interpolation, css } from "styled-components"

import Icon from "@components/Icon/Icon"
import { BasicIconType } from "@components/Icon/utils/icons"

import theme, { fonts } from "@styles/theme"

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
  children: string
  leftIcon?: BasicIconType
  rightIcon?: BasicIconType
  onClick?: (e: React.MouseEvent) => void
}

export type Props = Partial<StyledButtonProps>

const StyledButton = styled.button<Props>`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 108px;
  border: none;
  width: 100%;
  border-radius: 10px;
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
    ${fonts.b7}
  `,
  md: css`
    padding: 14px 24px;
    ${fonts.b5}
  `,
  lg: css`
    padding: 17px 24px;
    ${fonts.b2}
  `,
}

const VARIANTS = {
  main: css`
    color: ${theme.Netural0};
    background-color: ${theme.Brand600};
    &:hover {
      background: ${theme.Brand750};
    }
    &:disabled {
      background-color: ${theme.Netural450};
    }
  `,
  weak: css`
    color: ${theme.Brand700};
    background-color: ${theme.Netural200};
    &:hover {
      background: linear-gradient(
          0deg,
          rgba(34, 37, 46, 0.06) 0%,
          rgba(34, 37, 46, 0.06) 100%
        ),
        var(--Brand-Light, #d9eefe);
    }
    &:disabled {
      background-color: ${theme.Brand200};
    }
  `,
  grey: css`
    color: ${theme.Netural800};
    background-color: ${theme.Netural300};
    &:hover {
      background-color: ${theme.Netural400};
    }
    &:disabled {
      background-color: ${theme.Netural200};
    }
  `,
  text: css`
    color: ${theme.Netural800};
    background: none;
    &:hover {
      background-color: ${theme.Netural200};
    }
    &:disabled {
      color: ${theme.Netural500};
    }
  `,
}

const Button = ({
  disabled = false,
  size = "md",
  variant = "main",
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const sizeStyle = SIZES[size]
  const variantStyle = VARIANTS[variant]
  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      onClick={onClick}
      {...props}>
      {leftIcon && <Icon icon={leftIcon} />}
      {children}
      {rightIcon && <Icon icon={rightIcon} />}
    </StyledButton>
  )
}

export default Button
