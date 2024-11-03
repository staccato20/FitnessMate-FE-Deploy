import { createContext, useContext, useState } from "react"

import Header from "@components/Accordion/Header"
import { AccordianWrapper } from "@components/Accordion/StyledAccordion"
import Trigger from "@components/Accordion/Trigger"

import { Recommend, StrictPropsWithChildren } from "@typpes/type"

import Content from "./Content"

interface AccordionContextProps {
  visible?: boolean
  toggle?: () => void
  bodyParts: string
  onOpen: () => void
  workout: Recommend
}

const AccordionContext = createContext<AccordionContextProps>({
  visible: false,
  toggle: () => {},
  bodyParts: "",
  onOpen: () => {},
  workout: {
    koreanName: "",
    videoLink: "",
    description: "",
    bodyPartKoreanName: [""],
    weight: "0",
    repeat: "0",
    workoutId: 0,
    set: "0",
    englishName: "",
    atcetera: null,
    imgPath: "",
    machineName: "",
  },
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

const Accordion = ({
  children,
  bodyParts,
  onOpen,
  workout,
}: StrictPropsWithChildren<AccordionContextProps>) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggle = () => {
    setVisible((prev) => !prev)
  }

  return (
    <AccordionContext.Provider
      value={{
        visible,
        toggle,
        bodyParts,
        onOpen,
        workout,
      }}>
      <AccordianWrapper $visible={visible}>{children}</AccordianWrapper>
    </AccordionContext.Provider>
  )
}

Accordion.Header = Header
Accordion.Content = Content
Accordion.Trigger = Trigger

export default Accordion
