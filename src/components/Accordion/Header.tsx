import { useAccordion } from "@components/Accordion/Accordion"
import {
  HeaderLeft,
  HeaderRight,
  HeaderRightInfo,
  HeaderTop,
  HeaderWrapper,
} from "@components/Accordion/StyledAccordion"
import RoundButton from "@components/Button/RoundButton"
import Title from "@components/Title/Title"

import { StrictPropsWithChildren } from "@typpes/type"

interface HeaderProps {
  bodyParts: string
  count?: number
  onClick: () => void
}

const Header = ({
  children,
  onClick,
  bodyParts,
  count,
}: StrictPropsWithChildren<HeaderProps>) => {
  const { visible } = useAccordion()

  return (
    <HeaderWrapper>
      <HeaderTop $visible={visible}>
        <HeaderLeft>
          <Title variant="big">
            {children}
            <Title.SubBottomTitle>{bodyParts}</Title.SubBottomTitle>
          </Title>
        </HeaderLeft>
        <HeaderRight>
          <HeaderRightInfo>
            {count && count > 0 && `${count}개 루틴에 이미 추가됨`}
          </HeaderRightInfo>
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
