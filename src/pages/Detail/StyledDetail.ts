import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const TotalWrapper = styled.div`
  padding-top: 56px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  max-width: 842px;
  margin: 0 auto;
  padding-bottom: 50px;
`

export const BeforeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 10px 10px 10px 0;
  color: ${theme.Brand600};
  ${fonts.b6};
`

export const DetailWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  width: 100%;
`
export const TitleWrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`
export const Title = styled.div`
  color: ${theme.Netural990};
  ${fonts.h1};
  font-size: 30px;
  font-weight: 700;
`

export const ContentWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
`
export const ContentBox = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
`
export const ContentImg = styled.img`
  border-radius: 12px;
  border: 1px solid #d1d6db;
  width: 40%;
`
export const ContentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  width: 60%;
  background: ${theme.Netural100};
  border-radius: 12px;
`

export const ContentInfoTopWrapper = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
  align-items: flex-start;
`
export const ContentInfoTopTitle = styled.span`
  color: ${theme.Netural990};
  ${fonts.b3};
`
export const ContentInfoTopText = styled.span`
  color: ${theme.Netural900};
  ${fonts.b6};
`
export const ContentInfoBottomWrapper = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
  justify-content: flex-start;
`
export const ContentInfoBottomTitle = styled(ContentInfoTopTitle)``

export const ContentInfoBottomList = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`
export const VideoWrapper = styled.div`
  width: 100%;
  height: 408px;
  border-radius: 12px;
  overflow: hidden;
`
