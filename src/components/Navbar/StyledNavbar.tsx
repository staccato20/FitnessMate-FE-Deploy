// < layout 스타일 >
import styled from "styled-components"

import { StyledButton } from "@components/Button/Button"

import theme, { fonts } from "@styles/theme"

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  max-width: 1920px;
  width: 100%;
  z-index: 999;
  height: 64px;
  display: flex;
  margin: 0 auto;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.Netural0};
`

export const LogoButton = styled.button``
export const Logo = styled.img`
  width: 88px;
`

export const NavLink = styled.div`
  display: flex;
  align-items: center;
`

export const NavTextContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const NavButton = styled(StyledButton)`
  color: ${theme.Netural990};
  padding: 10px 14px;
  ${fonts.b4}

  @media (max-width: 1000px) {
    display: none;
  }
  border-radius: 12px;
  &:hover {
    background-color: ${theme.Netural200};
  }
`
