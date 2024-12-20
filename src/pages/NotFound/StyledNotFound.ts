import styled from "styled-components"

import { theme } from "@styles/theme"

import { fonts } from "../../styles/theme"

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  gap: 30px;
  transform: translate(-50%, -50%);
`

export const NotFoundImg = styled.img`
  width: 500px;
  height: 300px;
  border-radius: 20px;
`

export const NotFoundButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const NotFoundTitle = styled.span`
  ${fonts.h1};
  color: ${theme.Netural990};
`
