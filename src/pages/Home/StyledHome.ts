// < 홈 스타일 >
import { motion } from "framer-motion"

import styled from "styled-components"

import logo from "@assets/images/logo.png"

import theme, { fonts } from "@styles/theme"

export const FirstSubTitle = styled.span`
  color: ${theme.Netural900};
  ${fonts.h1};
  font-size: 32px;
  @media only screen and (max-width: 720px) {
    font-size: 22px;
  }
`
export const FirstTitle = styled(FirstSubTitle)`
  font-size: 82px;
  @media only screen and (max-width: 720px) {
    font-size: 42px;
  }
`

export const HomeBanner = styled.img`
  max-width: 766px;
  width: 40%;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

export const First = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  min-height: 800px;
  padding: 0px 50px;
  &::after {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100vw;
    height: 888px;
    background: linear-gradient(185deg, #dce9f2 13.28%, #bbcbe4 77.52%);
  }
`
export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  @media only screen and (max-width: 1024px) {
    align-items: center;
    width: 100%;
  }
`

export const SecondTextWrapper = styled.div``
export const Second = styled.li`
  min-height: 950px;
  display: flex;
  flex-direction: column;
  gap: 200px;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const SecondButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 18px 8px 18px;
  color: ${theme.Brand600};
  ${fonts.h3};
  border-radius: 18px;
  background: ${theme.Netural200};
  svg {
    height: 40px;
  }
`
export const SecondText = styled.p`
  color: ${theme.Netural900};
  ${fonts.h2};
  font-weight: 500;
  @media only screen and (max-width: 720px) {
    font-size: 17px;
  }
  padding-bottom: 15px;
`
export const SecondText2 = styled(SecondText)`
  font-size: 34px;
  position: relative;
  font-weight: 600;
  padding-left: 145px;
  &::before {
    content: "";
    background-image: url(${logo});
    background-size: 136px 32px;
    background-repeat: no-repeat;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  @media only screen and (max-width: 720px) {
    font-size: 22px;
  }
`

export const Third = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  justify-content: center;
  width: 100vw;
  background: ${theme.Netural200};
  min-height: 950px;
  padding: 50px;
`
export const SlideList = styled.ul`
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

export const SlideTextWrapper = styled.div``

export const Title = styled.span`
  ${fonts.h1};
  font-size: 47px;
  @media only screen and (max-width: 1100px) {
    font-size: 22px;
  }
`

export const Slide = styled.li`
  padding: 50px;
  max-width: 1118px;
  width: 100%;
  height: 602px;
  display: flex;
  justify-content: space-between;
  border-radius: 32px;
  border: 1px solid var(--Gray-40, #b0b8c1);
  background: #f9fafc;
  @media only screen and (max-width: 1100px) {
    width: 80%;
  }
  @media only screen and (max-width: 720px) {
    height: 300px;
  }
`

export const SlideLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const SlideImg = styled.img`
  object-fit: contain;
  top: 57px;
  right: 0px;
  max-width: 600px;
  height: 537px;
  @media only screen and (max-width: 1100px) {
    width: 80%;
  }
  @media only screen and (max-width: 720px) {
    display: none;
  }
`

export const TabListWrapper = styled.div`
  position: relative;
  background-color: #e2e3eb;
  border-radius: 48px;
  overflow: hidden;
  padding: 5px;
`

export const TabList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const TabButton = styled.button`
  z-index: 1;
  padding: 10px 16px;
  display: flex;
  align-items: center;

  gap: 8px;
  ${fonts.b1};
  &.active {
    color: ${theme.Netural0};
  }
`

export const TabBackground = styled(motion.div)`
  position: absolute;
  top: 5px;
  left: 10px;
  width: calc((100% / 2) - 5px);
  height: calc(100% - 10px);
  background-color: #191f28;
  border-radius: 42px;
  display: flex;
  align-items: center;
`

export const Fourth = styled.li`
  width: 100%;
  height: 656px;
`

export const HomeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 79.5px;
  width: 100%;
  height: 100%;
  max-width: 627px;
  width: 100%;
  margin: 0 auto;
  padding: 0 4%;
`

export const SearchTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
`
export const SearchTitle = styled.span`
  color: ${theme.Brand700};
  ${fonts.h3};
  font-weight: 500;
`
export const SearchSubTitle = styled.span`
  color: ${theme.Netural990};
  font-size: 48px;
  font-weight: 600;
  text-align: center;
`

export const SearchKeywordForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
`

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  button {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`

export const SearchKeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  justify-content: space-between;
`

export const SearchKeywordTitle = styled.span`
  color: ${theme.Netural600};
  ${fonts.b4};
`

export const SearchKeywordList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  gap: 8px;
  flex-wrap: wrap;
`
