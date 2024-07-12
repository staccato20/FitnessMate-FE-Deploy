import styled from "styled-components"

import theme from "@styles/theme"

export const SelectList = styled.div`
  display: flex;
  gap: 10px;
`

export const SelectItem = styled.button<Props>`
  transition: all 0.3s ease-out;
  border-radius: 16px;
  background: ${({ $isChecked }) => ($isChecked ? theme.Gray10 : theme.White)};
  border: ${({ $isChecked }) =>
    $isChecked ? `2px solid ${theme.Brand}` : `2px solid transparent`};
  display: flex;
  width: 126px;
  height: 126px;
  padding: 18px 32px 19px 31px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  &:hover {
    background: ${theme.Gray10};
    border: 2px solid
      ${({ $isChecked }) =>
        $isChecked ? `2px solid ${theme.Brand}` : theme.Gray30};
  }
`
export const SelectImg = styled.img`
  width: 60px;
  height: 60px;
`

export const SelectText = styled.span<Props>`
  transition: all 0.3s ease-out;
  color: ${({ $isChecked }) => ($isChecked ? theme.BrandDark : theme.Gray50)};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
`
