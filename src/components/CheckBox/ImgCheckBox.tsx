import { ButtonHTMLAttributes, ReactNode } from "react"

import { css } from "styled-components"

import Icon from "@components/Icon/Icon"

import * as S from "./StyledCheckBox"

type Variant = "big" | "small"

const SIZE = {
  big: css`
    gap: 12px;
    width: 169px;
  `,
  small: css`
    gap: 8px;
    width: 144px;
  `,
}

interface ImgCheckBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant
  src: string
  alt: string
  isSelected: boolean
  setIsSelected: (isSelected: boolean) => void
  children: ReactNode
}

const ImgCheckBox = ({
  variant,
  src,
  alt,
  isSelected,
  setIsSelected,
  children,
  ...props
}: ImgCheckBoxProps) => {
  const sizeStyle = SIZE[variant]

  const handleClick = () => {
    setIsSelected(!isSelected)
  }

  return (
    <S.ImgCheckBoxWrapper
      $sizeStyle={sizeStyle}
      onClick={handleClick}
      {...props}>
      <S.ImageCheckBoxImg
        src={src}
        alt={alt}
      />
      <Icon
        icon={isSelected ? "CircleChecked" : ""}
        className="check"
      />
      <S.ImageCheckBoxText>{children}</S.ImageCheckBoxText>
    </S.ImgCheckBoxWrapper>
  )
}

export default ImgCheckBox
