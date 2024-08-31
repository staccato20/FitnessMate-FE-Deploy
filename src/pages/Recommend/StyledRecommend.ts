// StyledRecommend.ts
import { motion } from "framer-motion"

import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const RecommendAllWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 58px);
  background: ${theme.Netural200};
`

export const RecommendWrapper = styled.div`
  max-width: 752px;
  margin: 0 auto;
  padding-top: 57px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`

export const RecommendInner = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 300px);
  gap: 116px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 29px;
    background: ${theme.Netural300};
  }
`

export const Status = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 17px;
  align-items: center;
`

export const RecommendGuide = styled(motion.div)<{ $isGuideSwitch?: boolean }>`
  gap: 16px;
  display: flex;
  opacity: ${({ $isGuideSwitch }) => ($isGuideSwitch ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RecommendSwitchGuide = styled(motion.div)<{
  $isGuideSwitch: boolean
}>`
  position: absolute;
  top: 85px;
  gap: 16px;
  display: flex;
  opacity: ${({ $isGuideSwitch }) => ($isGuideSwitch ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  align-items: center;
  z-index: 10;
`

export const RecommendMachineWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  height: 502px;
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

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 32px;
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`
export const Title = styled.span`
  color: ${theme.Netural990};
`

export const TitleLeft = styled.span`
  color: ${theme.Netural990};
  ${fonts.h1}
  font-weight: 400;
  .bold {
    ${fonts.h1}
    font-weight: 700;
  }
`

export const TitleRight = styled.button`
  color: ${theme.Netural900};
  ${fonts.b4};
`

export const TitleInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const KeyWordWrapper = styled.div`
  display: flex;
  padding-left: 4px;
  align-items: center;
  gap: 12px;
  color: ${theme.Netural600};
  ${fonts.b6};
`

export const KeyWordList = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`
export const KeyWordItem = styled.div`
  padding: 4px 6px;
  color: ${theme.Netural900};
  ${fonts.d2};
  font-weight: 600;
  border-radius: 6px;
  border: 1px solid ${theme.Netural500};
  background: ${theme.Netural200};
`

export const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`
