import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const CardWrapper = styled.button`
  height: 100%;
  width: 100%;
  user-select: none;
`

export const CardImg = styled.img`
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid #f2f4f6;
  max-width: 312px;
  height: 250px;
`
export const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  width: 100%;
  padding: 24px 8px;
`

export const CardText = styled.span`
  color: ${theme.Netural990};
  ${fonts.h3};
`

export const BadgeList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`
