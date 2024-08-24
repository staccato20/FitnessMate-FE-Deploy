import styled from "styled-components"

import theme from "@styles/theme"

interface StatusBarItemProps {
  $status: number
}

export const ProgressBarBox = styled.div`
  position: relative;
  height: 10px;
  background: ${theme.Netural300};
  margin-bottom: 24px;
  border-radius: 24px;
`

export const ProgressBarItem = styled.div<StatusBarItemProps>`
  position: absolute;
  width: ${({ $status }) => `${(100 / 5) * $status}%`};
  height: 100%;
  border-radius: 24px;
  background: ${theme.Brand600};
`
