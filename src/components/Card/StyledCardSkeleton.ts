import styled from "styled-components"

import { theme } from "@styles/theme"

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 1032px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const CardImg = styled.img`
  border-radius: 12px;
  border: 1px solid ${theme.Netural200};
  background: #ccc;
  max-width: 312px;
  width: 100%;
  height: 100%;
`

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 312px;
  width: 100%;
  height: 300px;
  gap: 18px;
  justify-content: flex-start;
`

export const CardContents = styled.div`
  max-width: 267px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  width: 100%;
`

export const CardTextBox = styled.div`
  background-color: ${theme.Netural990};
  border-radius: 4px;
  background: #d9d9d9;
  max-width: 256px;
  height: 30px;
  width: 100%;
`

export const BadgeList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  width: 100%;
`

export const Badge = styled.div`
  border-radius: 4px;
  background: #e3e3e3;
  max-width: 55px;
  width: 100%;
  height: 29px;
  color: transparent;
`
