import { createContext, useContext, useState } from "react"

import styled, { css } from "styled-components"

import Header from "@components/Accordion/Header"
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

export const AccordianWrapper = styled.div<{ $visible: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ $visible }) =>
    $visible &&
    css`
      padding: 24px 22px 0px 22px;
      gap: 24px;
    `}

  align-items: center;

  border-radius: 0px 0px 16px 16px;
  box-shadow: 0px 4px 8.1px 0px rgba(0, 0, 0, 0.03);
  background: var(--Grayscale-Neutral0, #fff);
`
