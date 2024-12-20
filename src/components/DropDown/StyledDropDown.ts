import { Interpolation, css, styled } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const DropDownWrapper = styled.div<{
  $positionStyle: Interpolation<object>
}>`
  display: flex;
  flex-direction: column;
  padding: 6px;
  gap: 4px;
  border-radius: 12px;
  background: ${theme.Netural0};
  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.12);

  ${({ $positionStyle }) => $positionStyle};s
`

export const DropDownButton = styled.button<{
  $variantStyle: Interpolation<object>
}>`
  display: flex;
  width: 149px;
  padding: 10px 12px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  ${({ $variantStyle }) => $variantStyle};
`

export const Line = styled.div`
  height: 1px;
  background: ${theme.Netural200};
`

export const VARIANTS = {
  grey: css`
    color: ${theme.Netural700};
    ${fonts.d1};

    &:hover {
      color: ${theme.Netural800};
      background: ${theme.Netural200};
    }
  `,
  red: css`
    color: ${theme.Error};
    ${fonts.d1};

    &:hover {
      background: ${theme.ErrorWeak};
    }
  `,
}

export const POSITION = {
  my: css`
    position: absolute;
    right: 19px;
    bottom: 14px;
  `,
  nav: css`
    position: absolute;
    top: 56px;
    right: 0;
  `,
}

export const FixIconButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: ${theme.Netural150};
  width: 32px;
  height: 32px;
  border-radius: 8px;
`

export const DropDownContainer = styled.div`
  position: relative;
`

export const NavNameButton = styled.button`
  font-size: 18px;
  padding: 10px 24px;
  border-radius: 12px;
  font-weight: 700;
  color: ${theme.Brand600};
  &:hover {
    background-color: ${theme.Netural200};
  }
`
