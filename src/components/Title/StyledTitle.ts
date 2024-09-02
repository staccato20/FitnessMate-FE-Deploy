import { Interpolation, styled } from "styled-components"

import theme from "@styles/theme"

export const TitleWrapper = styled.div<{
  $variantStyle: Interpolation<object>
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${({ $variantStyle }) => $variantStyle}
`

export const SubTopTitleText = styled.span`
  color: ${theme.Brand750};
`
export const SubBottomTitleText = styled.span`
  color: ${theme.Netural800};
`
