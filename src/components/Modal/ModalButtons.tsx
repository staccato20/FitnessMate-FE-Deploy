import { PropsWithChildren } from "react"

import { styled } from "styled-components"

const ModalButtons = ({ children }: PropsWithChildren) => {
  return <ButtonWrapper>{children}</ButtonWrapper>
}

export default ModalButtons

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  gap: 8px;
`
