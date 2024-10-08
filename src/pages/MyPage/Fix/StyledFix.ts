import styled from "styled-components"

import theme from "@styles/theme"

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 70px;
  width: 474px;

  .recommendText {
    color: ${theme.Netural800};
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.44px;
  }
  .buttonContainer {
    display: flex;
    flex-direction: column;
  }
  .congratuImg {
    display: inline-block;
    margin: 0 auto;
    padding-top: 60px;
  }

  .profileForm {
    display: flex;
    gap: 12px;
    flex-direction: column;
  }

  .buttonCompleteContainer {
    margin: 0 auto;
  }
  .signupCompleteNavBox {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
    .signupCompleteTitle {
      color: ${theme.Netural800};
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.44px;
    }
    .signupCompleteNavItem {
      width: 100%;
      display: flex;
      padding: 24px;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      background: ${theme.Netural100};
      text-align: left;
      .signupCompleteNavItemText {
        color: #333d4b;
        font-size: 20px;
        letter-spacing: -0.4px;
        font-weight: 600;
      }
      .signupCompleteNavItemText2 {
        color: #333d4b;
        font-size: 16px;
        letter-spacing: -0.32px;
      }
    }
  }
`

export const SignupTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SignupTitle = styled.span<Props>`
  text-align: ${({ flex }) => (flex ? "center" : "")};
  display: ${({ flex }) => (flex ? "flex" : "")};
  flex-direction: ${({ flex }) => (flex ? "column" : "")};
  align-items: center;
  width: 100%;
  color: #333d4b;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.6px;
  .warningNoWrite {
    display: inline-block;
    color: ${theme.Netural800};
    font-size: 22px;
    padding-top: 12px;
  }

  .statusBar {
    position: relative;
    height: 4px;
    background: ${theme.Brand400};
    margin-bottom: 24px;

    .statusBar2 {
      position: absolute;
      width: ${({ status }) => `${(100 / 4) * status}%`};
      height: 4px;
      background: ${theme.Brand600};
    }
  }
  .signupCompleteTitle {
    color: ${theme.Netural800};
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.44px;
  }
`

export const TitleEmphasis = styled.span`
  color: ${({ theme }) => theme.Netural990};
  font-size: 28px;
  font-weight: 700;
`

export const BodyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  .sexSelect {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 34px;
    .bodyInfoWarning {
      color: ${({ theme }) => theme.Error};
      font-size: 16px;
    }
  }

  .sexList {
    display: flex;
    gap: 5px;
  }
`

export const ProfileInputcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const SexName = styled.span<Props>`
  transition: all 0.3s ease-out;
  color: ${({ sex, theme }) => (sex ? theme.Brand950 : theme.Netural100)};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
`

export const SexItem = styled.button<Props>`
  transition: all 0.3s ease-out;
  border-radius: 16px;
  background: ${({ sex, theme }) => (sex ? theme.Netural100 : theme.Netural0)};
  border: ${({ sex, theme }) =>
    sex ? `2px solid ${theme.Brand600}` : `2px solid transparent`};
  display: flex;
  width: 126px;
  height: 126px;
  padding: 18px 32px 19px 31px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  .sexImg {
    width: 60px;
    height: 60px;
  }
  &:hover {
    background: ${({ theme }) => theme.Netural100};
    border: 2px solid
      ${({ sex, theme }) => (sex ? `2px solid ${theme.Brand600}` : "#e4e7eb")};
  }
  &:hover ${SexName} {
    color: ${({ sex, theme }) => (sex ? theme.Brand950 : theme.Netural990)};
  }
`

export const SignupTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  .bodyfigureText {
    padding-bottom: 10px;
    color: ${theme.Netural800};
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.4px;
  }
  .directButtonContainer {
    display: flex;
    justify-content: flex-end;
    .directbutton {
      /* 자식 크기에 width 맞추기 */
      padding: 10px;
      justify-content: center;
      display: flex;
      align-items: center;
      gap: 10px;
      color: ${theme.Brand600};
      font-size: 20px;
      font-weight: 600;
      .rightArrow {
        width: 24px;
        height: 24px;
      }
    }
  }
`

export const BodyCompositionInputList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 117px;
`

export const FixPassword = styled.button`
  font-size: 20px;
  color: ${({ theme }) => theme.Brand600};
  text-decoration: underline;
  font-weight: 700;
`

export const NonFix = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;

  .nonfix-title {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.Netural990};
  }

  .nonfix-content {
    background-color: ${({ theme }) => theme.Netural100};
    border: 1.5px solid ${({ theme }) => theme.Netural200};
    display: flex;
    align-items: center;
    height: 56px;
    width: 474px;
    border-radius: 10px;
    padding-left: 14px;
    color: ${({ theme }) => theme.Netural100};
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 55px;
  }
`

export const CancelButton = styled.button`
  width: 180px;
  height: 62px;
  padding: 22px 10px;
  background: ${({ theme }) => theme.Netural0};
  color: ${({ theme }) => theme.Brand600};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 12px;
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

export const SaveButton = styled.button`
  width: 294px;
  height: 62px;
  padding: 22px 24px;

  background: ${({ theme }) => theme.Brand600};
  color: ${({ theme }) => theme.Netural0};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 12px;
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

export const SignupUpdonwBalanceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  .updownBalanceBox {
    display: flex;
    flex-direction: column;
    gap: 24px;
    .updownBalanceTitle {
      color: ${theme.Netural800};
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.4px;
    }
    .updownBalanceBar {
      display: flex;
      flex-direction: column;
      gap: 4px;
      .updownBalanceBarTitle {
        color: ${theme.Netural800};
        font-size: 14px;
        text-align: center;
      }
      .updownBalanceBarContent {
        justify-content: space-between;
        height: 58px;
        display: flex;
        align-items: center;
        .balanceRatioBox {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
          .balanceRatio {
            color: ${theme.Netural800};
            font-size: 18px;
          }
          .balanceRatioPercent {
            color: ${theme.Netural800};
            font-size: 18px;
            font-weight: 700;
          }
        }
      }
    }
  }
`
