import styled from "styled-components"

import theme from "@styles/theme"

export const StatusBarBox = styled.div`
  position: relative;
  height: 4px;
  background: ${theme.BrandLight};
  margin-bottom: 24px;
`

export const StatusBarItem = styled.div`
  position: absolute;
  width: ${({ $status }) => `${(100 / 4) * $status}%`};
  height: 4px;
  background: ${theme.Brand};
`
