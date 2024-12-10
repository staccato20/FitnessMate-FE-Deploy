import { Interpolation, css, styled } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const DropDownWrapper = styled.div<{
  $positionStyle: Interpolation<object>
}>`
  display: flex;
  flex-direction: column;
  width: 161px;
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

  &:hover {
    background: ${theme.Netural200};
    cursor: pointer;
  }
`

export const Line = styled.div`
  height: 1px;
  background: ${theme.Netural200};
`

export const VARIANTS = {
  grey: css`
    color: ${theme.Netural700};
    ${fonts.d1};
  `,
  red: css`
    color: ${theme.Error};
    ${fonts.d1};
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
    top: 14px;
    right: 0;
  `,
}
