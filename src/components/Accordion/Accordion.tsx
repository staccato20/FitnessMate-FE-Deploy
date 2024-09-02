import { createContext, useContext, useState } from "react"

import Header from "@components/Accordion/Header"
import { AccordianWrapper } from "@components/Accordion/StyledAccordion"
import Trigger from "@components/Accordion/Trigger"

import { StrictPropsWithChildren } from "@typpes/type"

import Content from "./Content"

interface AccordionContextProps {
  visible: boolean
  toggle: () => void
}

const AccordionContext = createContext<AccordionContextProps>({
  visible: false,
  toggle: () => {},
})

export const useAccordion = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error(
      "Header, Content 컴포넌트는 Accordion 컴포넌트 내부에서 사용되어야 합니다.",
    )
  }
  return context
}

const Accordion = ({ children }: StrictPropsWithChildren) => {
  const [visible, setVisible] = useState(false)

  const toggle = () => {
    setVisible((prev) => !prev)
  }

  return (
    <AccordionContext.Provider value={{ visible, toggle }}>
      <AccordianWrapper $visible={visible}>{children}</AccordianWrapper>
    </AccordionContext.Provider>
  )
}

Accordion.Header = Header
Accordion.Content = Content
Accordion.Trigger = Trigger

export default Accordion
