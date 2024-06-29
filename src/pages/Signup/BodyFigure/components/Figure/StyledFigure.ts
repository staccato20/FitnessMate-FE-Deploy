import styled from "styled-components"

import theme from "@styles/theme"

export const FigureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`

export const FigureTitle = styled.span`
  padding-bottom: 10px;
  color: ${theme.Gray80};
  font-size: 20px;
  font-weight: 600;
`

export const FigureOptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-left: 10px;
  width: 100%;
  padding: 10px;
`

export const FigureOptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const FigureOptionDirectItemWrapper = styled.div`
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 64px;
  align-items: center;
`

export const FigureOptionDirectItemList = styled.div`
  display: flex;
  justify-content: center;
  gap: 52px;
  width: 50%;
  align-items: center;
`

export const FigureOptionDirectItemOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const FigureOptionDirectItemOptionTitle = styled.span`
  color: var(--Neutral-800, #4e5968);
  font-size: 15px;
`

export const FigureOptionDirectItemOptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const FigureOptionDirectItemOptionUnit = styled.span`
  color: var(--Neutral-900, #333d4b);
  font-size: 15px;
  font-weight: 400;
`

export const FigureOptioneDirectItemMessage = styled.div`
  color: var(--Neutral-800, #4e5968);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;
  background: var(--Neutral-200, #f2f4f6);
  padding: 25px;
`

export const FigureOptioneDirectItemInnerMessage = styled.span`
  color: var(--Neutral-950, #272e38);
  font-size: 16px;
`

export const FigureOptioneDirectItemInnerMessage2 = styled.span`
  color: var(--Neutral-800, #4e5968);
  font-size: 15px;
`

export const FigureOptionInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
