import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

const getBorderStyle = ($isError: boolean, $isDirty: boolean) => {
  if (!$isDirty) {
    return ``
  }
  return $isError ? `3px solid ${theme.Error}` : `3px solid ${theme.Brand600}`
}

export const InputWarning = styled.span`
  color: ${theme.Error};
  font-size: 16px;
`

export const Input = styled.input<{
  $isError: boolean
  $isDirty: boolean
}>`
  &::-webkit-input-placeholder {
    color: ${theme.Netural500};
    ${fonts.b4}
  }
  background: ${theme.Netural200};
  border-radius: 10px;
  padding: 16px;
  width: 100%;
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
