import { styled } from "styled-components"

import theme from "@styles/theme"

const RatioButton = styled.button`
  border-radius: 34px;
  background: ${theme.Netural800};
  display: flex;
  width: 28px;
  height: 28px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`
export const RatioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
`
export const RatioBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
export const RatioTitle = styled.span`
  color: ${theme.Netural990};
  font-size: 18px;
`
export const RatioBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
`
export const RatioBoxTitle = styled.span`
  color: ${theme.Netural800};
  font-size: 15px;
  font-weight: 600;
`

export const RatioContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RatioPercentBox = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid ${theme.Netural200};
  background: ${theme.Netural100};
`
export const RatioButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const RatioPercent = styled.span`
  color: ${theme.Netural990};
  font-size: 30px;
`
export const RatioPlusButton = styled(RatioButton)`
  background: ${theme.Netural300};
`
export const RatioMinusButton = styled(RatioButton)`
  border: 1px solid ${theme.Netural300};
  background: ${theme.Netural200};
`
export const RatioMessage = styled.span`
  color: ${theme.Netural900};
  font-size: 15px;
  text-align: center;
`
export const RatioPlusButtonImg = styled.img``
export const RatioMinusButtonImg = styled.img``
