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

export const FindPass = styled.button`
  color: ${theme.Brand600};
  ${fonts.h4};
  font-weight: 500;
  width: fit-content;
  padding-left: 2px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Warning = styled.span`
  color: ${theme.Error};
  ${fonts.b4};
  padding-top: 23.5px;
`
