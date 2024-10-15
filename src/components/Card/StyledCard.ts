import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const CardWrapper = styled.button`
  display: flex;
  flex-direction: column;
  width: fit-content;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s linear;
    span {
      color: ${theme.Brand600};
    }
  }
`

export const CardImg = styled.img`
  object-fit: cover;
  max-width: 310px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid #f2f4f6;
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
  flex-wrap: wrap;
  gap: 4px;
`
