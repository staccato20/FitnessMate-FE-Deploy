import { css } from "styled-components"

import theme from "@styles/theme"

import { ProgressBarBox, ProgressBarItem } from "./StyledProgressBar"

export type Variant = "default" | "round"

export interface ProgressBarProps {
  variant?: Variant
  progress: number
}

export const VARIANTS = {
  default: css`
    height: 4px;
    background: ${theme.Brand300};
    margin-bottom: 24px;
  `,
  round: css`
    width: 100%;
    height: 10px;
    background: ${theme.Netural300};
    border-radius: 24px;
  `,
}

const ProgressBar = ({ progress, variant = "default" }: ProgressBarProps) => {
  const $variantStyle = VARIANTS[variant]
  return (
    <ProgressBarBox $variantStyle={$variantStyle}>
      <ProgressBarItem
        $variant={variant}
        $progress={progress}
      />
    </ProgressBarBox>
  )
}

export default ProgressBar
