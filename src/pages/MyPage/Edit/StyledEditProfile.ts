import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const EditProfileForm = styled.form`
  padding-top: 75px;
  width: 474px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  gap: 45px;
`

export const EditProfileTitle = styled.span`
  ${theme.Netural990};
  ${fonts.h1};
  font-size: 30px;
`
export const EditProfileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
`

export const EditPasswordButton = styled.button`
  color: ${theme.Brand700};
  ${fonts.b3};
  font-weight: 700;
  text-align: left;
  width: fit-content;
  padding-top: 10px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: ${theme.Brand700};
  }
`

export const EditButtonContainer = styled.div`
  padding-top: 180px;
  display: flex;
  align-items: center;
`
