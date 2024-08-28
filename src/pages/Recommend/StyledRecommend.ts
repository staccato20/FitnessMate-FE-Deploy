import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const RecommendWrapper = styled.div`
  max-width: 752px;
  margin: 0 auto;
  padding-top: 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`

export const Status = styled.div`
  width: 100%;
  display: flex;
  gap: 17px;
  align-items: center;
`

export const RecommendGuide = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RecommendUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 272px;
`

export const UserName = styled.span`
  color: ${theme.Netural950};
  ${fonts.h4}
  &::after {
    content: " 님";
    color: ${theme.Netural600};
  }
`

export const UserInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-bottom: 12px;
`

export const UserInfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UserInfoName = styled.span`
  color: ${theme.Netural600};
  ${fonts.b6}
`

export const UserInfoValue = styled(UserInfoName)`
  color: ${theme.Netural900};
`

export const RecommendMachineWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  height: 502px;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 29px;
    background: ${theme.Netural300};
  }
`
