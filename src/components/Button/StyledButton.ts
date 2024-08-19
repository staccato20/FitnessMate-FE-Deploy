// < 버튼 스타일 >
import styled from "styled-components"

import theme from "@styles/theme"

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
