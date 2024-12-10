import { motion } from "framer-motion"

import styled, { css } from "styled-components"

export const RecommendWrapper = styled.div`
  max-width: 752px;
  margin: 0 auto;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Status = styled.div<{ $isScrollTop: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  gap: 17px;
  align-items: center;
  &::after {
    ${({ $isScrollTop }) =>
      !$isScrollTop &&
      css`
        position: absolute;
        bottom: -35px;
        content: "";
        width: 100%;
        height: 36px;
        z-index: 5;
        background: linear-gradient(
          180deg,
          #fbfcfc 30.5%,
          rgba(251, 252, 252, 0) 100%
        );
      `}
  }
`

export const RecommendGuideWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 400px;
`

export const RecommendGuide = styled(motion.div)`
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`
