import { ButtonHTMLAttributes } from "react"

import styled, { Interpolation, css } from "styled-components"

import { fonts } from "@styles/theme"

import theme from "../../styles/theme"

export type Variant = "fill" | "line"

const getVariant = (variant: Variant, isSelected: boolean) => {
  switch (variant) {
    case "fill":
      return css`
        color: ${isSelected ? theme.Netural0 : theme.Netural800};
        background: ${isSelected ? theme.Brand600 : theme.Netural0};
        padding: 10px 14px;
        ${fonts.b4};
        border-radius: 34px;
        &:hover {
          background-color: ${!isSelected && theme.Netural200};
        }
      `
    case "line":
      return css`
        color: ${isSelected ? theme.Netural950 : theme.Netural700};
        position: relative;
        padding: 10px;
        ${fonts.b2};
        border-radius: 8px;
        &:hover {
          background: ${theme.Netural200};
        }

        ${isSelected &&
        css`
          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            width: calc(100% - 20px);
            border-radius: 2px;
            border-bottom: 2px solid ${theme.Netural900};
          }
        `}
      `
    default:
  }
}

export const StyledTab = styled.button<{
  $variantStyle: Interpolation<object>
}>`
  border: none;
  ${(p) => p.$variantStyle}
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const StyledTabCount = styled.span`
  ${fonts.b7}
  color:${theme.Brand700}
`

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  variant: Variant
  onClick: (e: React.MouseEvent) => void
  isSelected: boolean
  count?: number
}

const Tab = ({
  children,
  onClick,
  variant,
  count,
  isSelected,
  ...props
}: TabProps) => {
  const variantStyle = getVariant(variant, isSelected)
  return (
    <StyledTab
      onClick={onClick}
      $variantStyle={variantStyle}
      {...props}>
      {children}
      {variant === "line" && <StyledTabCount>{count}</StyledTabCount>}
    </StyledTab>
  )
}

export default Tab
