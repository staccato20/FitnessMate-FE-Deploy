import { motion } from "framer-motion"

import styled, { css } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const SearchWrapper = styled.div`
  width: 100%;
  max-width: 1032px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 82px;
  padding-top: 62px;
  padding-bottom: 50px;
`

export const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 52px;
  align-items: center;
  position: relative;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

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

export const TabsWrapper = styled.div<{ $isTabFixed: boolean }>`
  z-index: 998;
  width: 100vw;
  height: 60px;
  padding: 9px 0px;
  border: 1px solid ${theme.Netural200};
  background: ${theme.Netural100};
  ${({ $isTabFixed }) =>
    $isTabFixed
      ? css`
          position: sticky;
          top: 62px;
        `
      : css``}
`

export const TabsBox = styled.div`
  max-width: 1042px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const SearchToggle = styled.button`
  border-radius: 37px;
  border: 1px solid ${theme.Netural500};
  display: flex;
  align-items: center;
  padding: 10px 18px;
  justify-content: center;
  gap: 7px;
  color: ${theme.Netural500};
  background: ${theme.Netural0};
  ${fonts.d1};
  font-size: 14px;
`

export const DropDownWrapper = styled(motion.div)`
  height: 408px;
  width: 45%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  justify-content: center;
  .close {
    position: absolute;
    top: 180px;
    right: 30px;
  }
`

export const DropDownKeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
`

export const DropDownKeywordTitle = styled.span`
  ${fonts.b4};
  color: ${theme.Netural600};
`
export const DropDownKeywordList = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 1032px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const CardList = styled.ul`
  display: grid;
  gap: 24px 48px;
  grid-template-columns: repeat(auto-fit, minmax(29%, auto));
`

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`
export const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
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
