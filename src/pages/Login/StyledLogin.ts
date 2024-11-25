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

export const Option = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const Auto = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-left: 4px;
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
  }
`

export const AutoLabel = styled.label`
  cursor: pointer;
  color: ${theme.Netural600};
  ${fonts.b1};
  user-select: none;
`

export const FindPass = styled.button`
  color: ${theme.Brand600};
  ${fonts.h4};
  font-weight: 500;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
