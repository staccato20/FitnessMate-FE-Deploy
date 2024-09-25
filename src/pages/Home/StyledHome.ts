// < 홈 스타일 >
import { motion } from "framer-motion"

import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const FirstSubTitle = styled.span`
  color: ${theme.Netural900};
  ${fonts.h1};
  font-size: 32px;
`
export const FirstTitle = styled(FirstSubTitle)`
  font-size: 82px;
`

export const HomeContent = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100vw;
    height: 861px;
    background: linear-gradient(185deg, #dce9f2 13.28%, #bbcbe4 77.52%);
  }
`

export const HomeBanner = styled.img`
  width: 766px;
  height: 765px;
`

export const First = styled.li`
  display: flex;
  width: 100%;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
`
export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`

export const SecondTextWrapper = styled.div``
export const Second = styled.li`
  height: 950px;
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
`
export const SecondText2 = styled(SecondText)`
  font-size: 34px;
  position: relative;
  font-weight: 600;
  padding-left: 145px;
  &::before {
    content: "";
    background-image: url("/src/assets/images/logo.png");
    background-size: 136px 32px;
    background-repeat: no-repeat;
    position: absolute;
    top: 5px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`

export const Third = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

export const SlideListWrapper = styled.div`
  position: relative;
  background-color: #e2e3eb;
  border-radius: 48px;
  overflow: hidden;
  padding: 5px;
  width: 370px;
`

export const SlideList = styled.ul`
  display: flex;
  gap: 4px;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`

export const SlideButton = styled.button`
  position: relative;
  z-index: 2;
  padding: 10px 16px 10px 12px;
  ${fonts.b1};
  display: flex;
  align-items: center;
  gap: 8px;

  &.active {
    color: white;
  }
`

export const SliderBackground = styled(motion.div)`
  position: absolute;
  top: 5px;
  left: 15px;
  width: calc((100% / 3) - 5px);
  height: calc(100% - 10px);
  background-color: #191f28;
  border-radius: 20px;
  display: flex;
  align-items: center;
`

export const HomeContainer = styled.ul`
  width: 100%;
  margin: 0 auto;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  // 3
  .thirdContent {
    display: flex;
    padding: 270px 0 311px 0;
    flex-direction: column;
    gap: 159px;

    .thirdHeader {
      padding-left: 43.5px;
      width: 100%;
      // justify-self를 flex에서는 지원하지 않는다.

      .thirdTitle {
        display: flex;
        flex-direction: column;
        gap: 48px;

        .thirdTitleText {
          color: ${theme.Netural990};
          font-size: 58px;
          font-weight: 600;
          line-height: 130%; /* 75.4px */
          letter-spacing: -1.16px;
        }
        .myFitnessBtn {
          padding: 10px;
          gap: 10px;
          display: flex;
          align-items: center;
          color: ${theme.Brand600};
          .myFitnessBtnText {
            font-size: 32px;
            font-weight: 700;
            letter-spacing: -0.64px;
          }
          .myFitnessBtnImg {
            width: 29px;
            height: 29px;
          }
        }
      }
    }

    .thirdBody {
      display: flex;
      flex-direction: column;
      gap: 125px;

      .thirdFirstContent {
        display: flex;
        gap: 199px;
        flex-wrap: wrap;
      }

      .thirdSecondContent {
        display: flex;
        gap: 233px;
        flex-wrap: wrap-reverse;
      }

      .thirdThirdContent {
        display: flex;
        gap: 546px;
        flex-wrap: wrap;
      }

      .thirdFirstImg {
        width: 593px;
        height: 595px;
      }
    }
  }

  //4
  .fourthContent {
    display: flex;
    padding: 221.5px 335px;
    flex-direction: column;
    gap: 138px;

    .fourthTitle {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .fourthTitleText {
        font-size: 52px;
        font-weight: 700;
        letter-spacing: -1.04px;
        color: ${theme.Netural990};
        text-align: center;
      }
    }

    .fourthBody {
      display: flex;
      gap: 100px;
    }
  }

  //5
  .fifthContent {
    display: flex;
    gap: 48px;
    align-items: center;
    flex-direction: column;
    padding: 206px 0 205px 0;
    background: ${theme.Netural200};
    max-width: 1920px;
    width: 100%;

    .fifthTitle {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .fifthFirstText {
        font-size: 32px;
        font-weight: 600;
        line-height: 130%;
        letter-spacing: -0.64px;
        color: ${theme.Netural100};
        text-align: center;
      }

      .fifthSecondText {
        font-size: 68px;
        font-weight: 600;
        line-height: 130%; /* 88.4px */
        letter-spacing: -2.04px;
        color: ${theme.Netural990};
        text-align: center;
      }
    }

    .searchBtn {
      gap: 10px;
      margin: 0 auto;
      padding: 10px;
      color: ${theme.Brand600};
      display: flex;
      align-items: center;
      .searchBtnText {
        color: ${theme.Brand600};
        font-size: 26px;
        font-weight: 600;
        letter-spacing: -0.52px;
      }
      .searchBtnImg {
        width: 29px;
        height: 29px;
      }
    }
  }
`

export const ThirdContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  .thirdContentTitleNum {
    display: flex;
    width: 64px;
    height: 64px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 62px;
    color: ${theme.Netural800};
    background: ${theme.Netural200};
    font-size: 36px;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: -0.72px;
  }

  .thirdContentTitleText {
    color: ${theme.Netural990};
    font-size: 42px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: -0.84px;
  }
`

export const FourthBodyItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 43px;

  .itemLogo {
    display: flex;
    width: 350px;
    height: 280px;
    justify-content: center;
    align-items: center;
    border-radius: 22px;
    background: ${theme.Brand400};
  }

  .itemText {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .itemTextTitle {
      text-align: center;
      color: ${theme.Netural990};
      font-size: 40px;
      font-weight: 600;
      letter-spacing: -0.8px;
      padding-bottom: 24px;
      border-bottom: 2px solid "#e4e7eb";
    }

    .itemTextContent {
      font-size: 24px;
      color: ${theme.Netural800};
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -0.48px;
      text-align: center;
    }
  }
`
