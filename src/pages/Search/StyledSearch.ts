import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const SearchWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 82px;
  padding-top: 62px;
`

export const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 52px;
  align-items: center;
  padding: 0 20px;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  max-width: 1032px;
  width: 100%;
`
export const Title = styled.span`
  color: ${theme.Netural600};
  ${fonts.h3};
`
export const SubTitle = styled.span`
  color: ${theme.Netural990};
  ${fonts.h1};
  font-size: 30px;
`

export const TabsWrapper = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  padding: 9px 0px;
  border: 1px solid ${theme.Netural200};
  background: ${theme.Netural100};
`

export const SearchBar = styled.button`
  border-radius: 37px;
  border: 1px solid ${theme.Netural500};
  background: ${theme.Netural0};
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  gap: 6px;
  color: ${theme.Netural500};
  ${fonts.b6};
  font-size: 14px;
`
export const CardWrapper = styled.div``
export const CardTitle = styled.span``
export const CardList = styled.ul``
export const PaginationWrapper = styled.div``
export const PaginationList = styled.ul``
