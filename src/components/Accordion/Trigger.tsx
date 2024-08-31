import { useAccordion } from "@components/Accordion/Accordion"
import { HeaderTrigger, TopLine } from "@components/Accordion/StyledAccordion"

const Trigger = () => {
  const { visible, toggle } = useAccordion()

  return (
    <HeaderTrigger onClick={toggle}>
      <TopLine />
      {visible ? "접기" : "자세히 보기"}
    </HeaderTrigger>
  )
}

export default Trigger
