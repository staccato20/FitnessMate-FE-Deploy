import styled from "styled-components"

import theme from "@styles/theme"

interface isCheckedProps {
  $isChecked: boolean
}

export const CheckBoxWrapper = styled.button<isCheckedProps>`
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 6px 18px;
  align-items: center;
  border-radius: 12px;
  border: ${({ $isChecked }) =>
    $isChecked ? `1px solid #0b98ff` : `1px solid #A2B2C2`};
  background: ${({ $isChecked }) => ($isChecked ? "#ecf7ff" : "#fff")};
  height: 50px;
`

export const CheckBoxImg = styled.img<isCheckedProps>`
  width: ${({ $isChecked }) => ($isChecked ? "24px" : "20px")};
  height: ${({ $isChecked }) => ($isChecked ? "24px" : "20px")};
  margin: ${({ $isChecked }) => ($isChecked ? "0px" : "2px")};
`
export const CheckBoxText = styled.span`
  color: var(--Neutral-950, #272e38);
  text-align: center;
  font-size: 16px;
`

export const FigureCheckBoxWrapper = styled.button<isCheckedProps>`
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

export const FigureCheckBoxText = styled.span<isCheckedProps>`
  color: ${({ $isChecked }) => ($isChecked ? "#272e38" : "#6b7684")};
  text-align: center;
  font-size: 14px;
`
