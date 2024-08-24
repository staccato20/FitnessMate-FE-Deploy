import { ButtonHTMLAttributes } from "react"

import styled from "styled-components"

import { fonts } from "@styles/theme"

import theme from "../../styles/theme"

export const StyledTab = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  border-radius: 34px;
  user-select: none;
  white-space: nowrap;
  padding: 10px 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${theme.Netural800};
  &:hover {
    background-color: ${theme.Netural200};
  }
  &:focus {
    color: ${theme.Netural0};
    background-color: ${theme.Brand600};
  }
  ${fonts.b4}
`

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  onClick: (e: React.MouseEvent) => void
}

const Tab = ({ children, onClick, ...props }: TabProps) => {
  return (
    <StyledTab
      onClick={onClick}
      {...props}>
      {children}
    </StyledTab>
  )
}

export default Tab
