import styled from "styled-components"

import theme from "@styles/theme"

export const CompleteNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`

export const CompleteNavList = styled.span`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 50px;
`

export const CompleteNavItem = styled.button`
  display: flex;
  width: 100%;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: ${theme.Netural100};
  text-align: left;
`
export const CompleteNavItemTitle = styled.div`
  color: ${theme.Netural990};
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 600;
`
export const CompleteNavItemText = styled.span`
  color: ${theme.Netural990};
  font-size: 16px;
`
