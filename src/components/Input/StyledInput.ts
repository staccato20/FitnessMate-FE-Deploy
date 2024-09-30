// @ts-nocheck
import styled, { css } from "styled-components"

import theme, { fonts } from "@styles/theme"

const getBorderStyle = ($isError: boolean, $isDirty: boolean) => {
  if (!$isDirty) {
    return ``
  }
  return $isError ? `3px solid ${theme.Error}` : `3px solid ${theme.Brand600}`
}

export const InputName = styled.label`
  cursor: default;
  color: ${theme.Netural990};
  font-size: 18px;
  display: flex;
  gap: 5px;
`

export const EseentialSymbol = styled.span`
  color: ${theme.Error};
  font-size: 18px;
`

export const InputWarning = styled.span`
  color: ${theme.Error};
  font-size: 16px;
`

export const Input = styled.input<Props>`
  &::-webkit-input-placeholder {
    color: ${theme.Netural500};
    ${fonts.b4}
  }
  background: ${theme.Netural200};
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  ${(props) => css`
    ${Object.keys(props)
      .map((key) => `${key}: ${props[key]};`)
      .join("")}
  `}
  border: ${({ $isError, $isDirty }) => getBorderStyle($isError, $isDirty)};
`

export const CheckBoxGroup = styled.div`
  display: flex;
  gap: 24px;
`

export const Text = styled.span`
  color: var(--Neutral-900, #333d4b);
  font-size: 15px;
  font-weight: 400;
`
