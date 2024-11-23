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
  color: ${theme.Netural900};
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

export const DirectFigureOptionWrapper = styled.div`
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 64px;
  align-items: center;
`

export const DirectFigureOptionList = styled.div`
  display: flex;
  justify-content: center;
  gap: 52px;
  width: 50%;
  align-items: center;
`

export const DirectFigureOptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const DirectFigureOptionMessage = styled.div`
  color: var(--Neutral-800, #4e5968);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;
  background: var(--Neutral-200, #f2f4f6);
  padding: 25px;
`

export const DirectFigureOptionInnerMessage = styled.span`
  color: var(--Neutral-950, #272e38);
  font-size: 16px;
`

export const DirectFigureOptionInnerMessage2 = styled.span`
  color: var(--Neutral-800, #4e5968);
  font-size: 15px;
`

export const FigureOptionInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const FigureCheckBoxButton = styled.button<{ $isChecked: boolean }>`
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 6px 18px;
  align-items: center;
  border-radius: 12px;
  background: ${({ $isChecked }) => ($isChecked ? "#f2f4f6" : "#fff")};
  height: 50px;
  &:hover {
    background: ${({ $isChecked }) =>
      $isChecked ? `#f2f4f6` : `${theme.Netural200}`};
  }
`

export const FigureCheckBoxText = styled.span<{ $isChecked: boolean }>`
  color: ${({ $isChecked }) => ($isChecked ? "#272e38" : "#6b7684")};
  text-align: center;
  font-size: 14px;
`
