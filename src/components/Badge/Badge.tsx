import styled, { Interpolation, css } from "styled-components"

import { StrictPropsWithChildren } from "@typpes/type"

import theme from "@styles/theme"

export type BadgeVariant = "default" | "fill"

interface BadgeProps {
  variant?: BadgeVariant
}

const VARIANTS = {
  default: css`
    background: ${theme.Netural200};
    color: ${theme.Netural990};
  `,
  fill: css`
    background: ${theme.Brand200};
    color: ${theme.Brand600};
  `,
}

const Badge = ({
  children,
  variant = "default",
}: StrictPropsWithChildren<BadgeProps>) => {
  const variantStyle = VARIANTS[variant]
  return <StyledBadge $variantStyle={variantStyle}>{children}</StyledBadge>
}

const StyledBadge = styled.div<{ $variantStyle: Interpolation<object> }>`
  border-radius: 4px;
  display: flex;
  padding: 6px 13px;
  justify-content: center;
  align-items: center;
  ${({ $variantStyle }) => $variantStyle};
`

export default Badge
