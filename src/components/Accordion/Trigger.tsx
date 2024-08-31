import styled from "styled-components"

import { useAccordion } from "@components/Accordion/Accordion"

import theme, { fonts } from "@styles/theme"

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

export const HeaderTrigger = styled.button`
  position: relative;
  display: flex;
  padding: 14px 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${theme.Netural0};
  color: ${theme.Netural700};

  ${fonts.d1}
`
export const TopLine = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 1px;
  transform: translateX(-50%);
  background-color: ${theme.Netural200};
  left: 50%;
`
