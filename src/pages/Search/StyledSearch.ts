import { motion } from "framer-motion"

import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const SearchWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 82px;
  padding: 62px 3% 52px 3%;
  max-width: 1032px;
`

export const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NavTab = styled.div`
  width: 100vw;
  z-index: 200;
  position: sticky;
  top: 63px;
  padding: 12px 3%;
`
export const NavTabInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1032px;
  margin: 0 auto;
  padding: 0 3%;
`
export const NavTabList = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
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

export const TabsWrapper = styled.div<{ $isTabFixed: boolean }>``

export const SearchToggle = styled.button<{ $isSearchMode: boolean }>`
  border-radius: 37px;
  border: 1px solid ${theme.Netural500};
  display: flex;
  align-items: center;
  padding: 10px 16px;
  justify-content: center;
  gap: 8px;
  color: ${({ $isSearchMode }) =>
    $isSearchMode ? theme.Netural600 : theme.Netural500};
  background: ${({ $isSearchMode }) =>
    $isSearchMode ? theme.Netural300 : theme.Netural0};
  ${fonts.d1};
  font-size: 14px;
`

export const DropdownFormWrapper = styled(motion.form)`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 105;
  overflow: hidden;
  position: relative;
  max-width: 1032px;
  z-index: 210;
  .close {
    position: absolute;
    top: 75px;
    right: 25px;
  }
`

export const DropDownKeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const DropDownBox = styled.div`
  max-width: 627px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;
`

export const DropDownKeywordTitle = styled.span`
  ${fonts.b4};
  color: ${theme.Brand600};
  padding-left: 6px;
`

export const DropDownKeywordList = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`

export const CardWrapper = styled.div<{ $isShow: boolean }>`
  width: 100%;
  max-width: 1032px;
  gap: 36px;
  flex-direction: column;
  padding: 0 1%;
  display: flex;
  z-index: ${({ $isShow }) => ($isShow ? 105 : 0)};
`

export const CardList = styled.ul`
  display: grid;
  padding-top: 52px;
  gap: 24px 48px;
  padding-bottom: 92px;
  grid-template-columns: repeat(auto-fill, minmax(29%, auto));
`

export const PaginationWrapper = styled.div<{ $isShow: boolean }>`
  display: flex;
  gap: 18px;
  align-items: center;
  z-index: ${({ $isShow }) => ($isShow ? 103 : 0)};
`
export const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const CardSearchTitle = styled.span`
  color: ${theme.Netural800};
  ${fonts.h1};
  font-size: 28px;
`

export const PaginationButton = styled.button<{ $isSelected?: boolean }>`
  padding: 6px;
  color: ${({ $isSelected }) =>
    $isSelected ? theme.Netural0 : theme.Netural800};
  ${fonts.b6};
  border-radius: 16px;
  background: ${({ $isSelected }) =>
    $isSelected ? theme.Netural900 : theme.Netural0};
  width: 30px;
  height: 30px;
`

export const BackOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${theme.Netural0};
  opacity: 0.6;
  z-index: 201;
`

export const DropDownSubText = styled.span`
  color: ${theme.Netural900};
  ${fonts.b4};
  padding-left: 8px;
  margin-bottom: -21px;
`
