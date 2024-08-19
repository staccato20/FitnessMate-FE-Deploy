// < 버튼 스타일 >
import styled from "styled-components"

import theme from "@styles/theme"

const Button = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 12px;
  font-size: 22px;
  &:hover {
    opacity: 0.5;
  }
`

// < 가로 길이가 긴 버튼 >

export const BigButtonWrapper = styled(Button)<Props>`
  width: 474px;
  height: 62px;
  padding: 22px 24px;
  background: ${(props) => props.backcolor || props.theme.Brand};
  color: ${(props) => props.fontcolor || props.theme.White};
`

export const ButtonWrapper = styled.button``
// < 가로 길이가 중간인 버튼 >

export const MiddleButtonWrapper = styled.button<Props>`
  width: 354px;
  height: 62px;
  padding: 22px 24px;
  background: ${({ $isValid }) =>
    $isValid === true ? theme.Brand : theme.BrandLight};
  cursor: ${({ $isValid }) => ($isValid ? "pointer" : "default")};
  color: ${theme.White};
`

// < 목록 버튼 >

export const ListButtonWrapper = styled(Button)`
  display: inline-flex;
  width: auto;
  height: 44px;
  padding: 10px 24px;
  gap: 10px;
  border-radius: 16px;
  font-size: 17px;

  background: ${theme.Gray10};
  color: ${theme.Black};
`

export const BeforeArrowButtonWrapper = styled.button`
  display: flex;
  width: 150px;
  height: 62px;
  padding: 22px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${theme.White};
  .beforeArrowBtnImg {
    width: 24px;
    height: 24px;
  }
  .beforeArrowBtnText {
    color: ${theme.Brand};
    font-size: 22px;
    letter-spacing: -0.44px;
  }
`

export const AfterArrowButtonWrapper = styled.button<Props>`
  display: flex;
  width: 150px;
  height: 62px;
  padding: 22px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${({ isReady }) => (isReady ? theme.Brand : theme.BrandNon)};
  cursor: ${({ isReady }) => (isReady ? "pointer" : "default")};

  .afterArrowBtnText {
    color: ${theme.White};
    font-size: 22px;
    letter-spacing: -0.44px;
  }

  .afterArrowBtnImg {
    width: 24px;
    height: 24px;
  }
`
