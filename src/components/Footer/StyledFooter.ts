import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const FooterInfoContentWrapper = styled.div`
  display: flex;
  gap: 32px;
`
export const FooterInfoContentTitle = styled.p`
  color: ${theme.Netural990};
  ${fonts.b7};
`
export const FooterInfoContent = styled.p`
  color: ${theme.Netural800};
  font-size: 14px;
  font-weight: 400;
`

export const FooterInfoContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const FooterInfoSubContentWrapper = styled.div`
  display: flex;
  gap: 18px;
`
export const FooterInfoSubContentTitle = styled.p`
  color: ${theme.Netural500};
  font-size: 14px;
  font-weight: 400;
`

export const Footer = styled.div`
  position: relative;
  width: 100vw;
  height: 589px;
  background: ${theme.Netural200};
`
export const FooterWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 112px;
  padding: 0 5%;
  flex-direction: column;
  gap: 35px;
  img {
    width: 60px;
  }
`
export const FooterInfoList = styled.div`
  display: flex;
  gap: 133px;
  flex-wrap: wrap;
`
