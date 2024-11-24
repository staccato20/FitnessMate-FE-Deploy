import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const InputWrapper = styled.div<{ $width: string }>`
  display: flex;
  padding: 10px 18px 10px 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: ${theme.Netural900};
  box-shadow: 0px 4px 23.4px 0px rgba(0, 0, 0, 0.15);
  width: ${({ $width }) => $width};
  height: 64px;
`

export const IconButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
`

export const Input = styled.input`
  width: 100%;
  color: ${theme.Netural0};
  &::-webkit-input-placeholder {
    color: ${theme.Netural0};
  }
  ${fonts.h4};
`
