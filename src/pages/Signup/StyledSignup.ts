import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const SignupWrapper = styled.div`
  padding-top: 100px;
  width: 474px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  gap: 52px;
  padding-bottom: 30px;
`
export const SignupForm = styled.form`
  position: relative;
  padding-top: 100px;
  width: 474px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  gap: 52px;
  padding-bottom: 30px;
`

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SignupTitle = styled.span`
  color: ${theme.Netural990};
  ${fonts.h1};
  font-size: 30px;
`

export const ButtonContainer = styled.div`
  margin-left: auto;
  gap: 6px;
  display: flex;
  align-items: center;
  padding-top: 64px;
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  align-items: flex-start;
`
