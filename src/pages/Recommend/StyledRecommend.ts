import { motion } from "framer-motion"

import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const RecommendAllWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${theme.Netural200};
`

export const RecommendWrapper = styled.div`
  max-width: 752px;
  margin: 0 auto;
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
`

export const CoverWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const LoadingText = styled.span`
  position: absolute;
  top: 50%;
  left: 51%;
  transform: translate(-50%, -50%);
  ${fonts.h3};
  text-align: center;
`

export const RecommendInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  height: calc(100vh - 400px);
  position: relative;
`

export const Status = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 17px;
  align-items: center;
`

export const RecommendGuide = styled(motion.div)`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const RecommendSwitchGuide = styled.div`
  position: absolute;
  top: 85px;
  gap: 16px;
  display: flex;
  align-items: center;
  z-index: 10;
`

export const RecommendMachineWrapper = styled(motion.ul)`
  position: absolute;
  top: 400px;
  max-width: 752px;
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
  ${fonts.h4};
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
  justify-content: space-between;
  align-items: center;
  gap: 14px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`

export const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  padding-bottom: 100px;
`

export const BodyPartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
`

export const TabTitle = styled.div`
  color: ${theme.Netural800};
  ${fonts.b3};
`

export const TabList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`
