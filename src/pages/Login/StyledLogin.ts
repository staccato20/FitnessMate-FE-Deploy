import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const LoginContainer = styled.div`
  display: flex;
  gap: 48px;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const LoginForm = styled.form`
  min-width: 433px;
  display: flex;
  flex-direction: column;
  gap: 37.5px;
`

export const Title = styled.h1`
  color: ${theme.Netural990};
  ${fonts.h1};
  font-size: 28px;
`

export const InputFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const AutomaticLogin = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
`

export const AutoCheckBox = styled.input`
  appearance: none;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 2px solid ${theme.Netural600};
  &:checked {
    appearance: checkbox;
    background: ${({ theme }) => theme.Brand};
  }
`

export const AutomaticLoginLabel = styled.label`
  color: ${theme.Netural600};
  ${fonts.b1};
  user-select: none;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
