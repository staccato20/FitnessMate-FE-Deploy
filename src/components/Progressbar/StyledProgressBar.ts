import styled, { Interpolation, css } from "styled-components"

import { Variant } from "@components/Progressbar/ProgressBar"

import theme from "@styles/theme"

export const ProgressBarBox = styled.div<{
  $variantStyle: Interpolation<object>
}>`
  position: relative;
  ${({ $variantStyle }) => $variantStyle}
`

export const ProgressBarItem = styled.div<{
  $progress: number
  $variant: Variant
}>`
  position: absolute;
  width: ${({ $progress }) => `${(100 / 4) * $progress}%`};
  background: ${theme.Brand600};
  height: 100%;

  ${({ $variant, $progress }) =>
    $variant === "round" &&
    css`
    border-radius: 24px;
      width: {(100 / 3) * ${$progress}%;
    `}
`
