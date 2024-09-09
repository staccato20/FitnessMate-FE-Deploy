import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

const Chip = ({ children }: { children: string }) => {
  return <ChipWrapper># {children}</ChipWrapper>
}

export default Chip

const ChipWrapper = styled.button`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${theme.Netural200};
  background: ${theme.Netural200};
  color: ${theme.Netural700};
  ${fonts.l1};
  font-size: 16px;
`
