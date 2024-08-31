import styled, { css } from "styled-components"

import { useAccordion } from "@components/Accordion/Accordion"
import RoundButton from "@components/Button/RoundButton"
import Title from "@components/Title/Title"

import { StrictPropsWithChildren } from "@typpes/type"

import theme, { fonts } from "@styles/theme"

interface HeaderProps {
  onClick: () => void
}

const Header = ({
  children,
  onClick,
}: StrictPropsWithChildren<HeaderProps>) => {
  const { visible } = useAccordion()

  return (
    <HeaderWrapper>
      <HeaderTop $visible={visible}>
        <HeaderLeft>
          <Title variant="big">
            푸쉬업
            <Title.SubBottomTitle>가슴 ,등</Title.SubBottomTitle>
          </Title>
        </HeaderLeft>
        <HeaderRight>
          <HeaderRightInfo>2개 루틴에 이미 추가됨</HeaderRightInfo>
          <RoundButton
            leftIcon="Add"
            variant="blue"
            onClick={onClick}>
            루틴에 추가
          </RoundButton>
        </HeaderRight>
      </HeaderTop>
    </HeaderWrapper>
  )
}

export default Header

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
export const HeaderTop = styled.div<{ $visible: boolean }>`
  display: flex;
  ${({ $visible }) =>
    !$visible &&
    css`
      padding: 24px 22px 18px 22px;
    `}
  justify-content: space-between;
  align-items: center;

  border-radius: 12px 12px 0px 0px;
  background: var(--Grayscale-Neutral0, #fff);
`
export const HeaderLeft = styled.div``
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const HeaderRightInfo = styled.span`
  color: ${theme.Netural900};
  ${fonts.d1}
`
