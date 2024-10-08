import { ButtonHTMLAttributes } from "react"

import { styled } from "styled-components"

import Icon, { ICON_MAP } from "@components/Icon/Icon"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: keyof typeof ICON_MAP
}

const IconButton = ({ icon, ...props }: IconButtonProps) => {
  return (
    <ButtonWrapper
      type="button"
      {...props}>
      <Icon
        icon={icon}
        aria-hidden
      />
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  &:disabled {
    cursor: default;
  }
`

export default IconButton
