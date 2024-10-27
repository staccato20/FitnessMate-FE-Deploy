import { useAccordion } from "@components/Accordion/Accordion"
import {
  HeaderLeft,
  HeaderRight,
  HeaderTop,
  HeaderWrapper,
} from "@components/Accordion/StyledAccordion"
import RoutineModalButton from "@components/Modal/components/Routine/RoutineModalButton"
import Title from "@components/Title/Title"

import { StrictPropsWithChildren } from "@typpes/type"

interface HeaderProps {
  bodyParts: string
  onOpen: () => void
}

const Header = ({
  children,
  bodyParts,
  onOpen,
}: StrictPropsWithChildren<HeaderProps>) => {
  const { visible } = useAccordion()

  return (
    <HeaderWrapper>
      <HeaderTop $visible={visible}>
        <HeaderLeft>
          <Title variant="midB">
            {children}
            <Title.SubBottomTitle>{bodyParts}</Title.SubBottomTitle>
          </Title>
        </HeaderLeft>
        <HeaderRight>
          <RoutineModalButton onOpen={onOpen} />
        </HeaderRight>
      </HeaderTop>
    </HeaderWrapper>
  )
}

export default Header
