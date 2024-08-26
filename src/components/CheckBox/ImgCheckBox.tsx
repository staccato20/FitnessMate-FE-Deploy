import { ButtonHTMLAttributes } from "react"

import { css } from "styled-components"

import Icon from "@components/Icon/Icon"

import { StrictPropsWithChildren } from "@typpes/type"

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
  handleToggle: () => void
}

const ImgCheckBox = ({
  variant,
  src,
  alt,
  isSelected,
  handleToggle,
  children,
  ...props
}: StrictPropsWithChildren<ImgCheckBoxProps>) => {
  const sizeStyle = SIZE[variant]

  return (
    <S.ImgCheckBoxWrapper
      $sizeStyle={sizeStyle}
      onClick={handleToggle}
      {...props}>
      <S.ImageCheckBoxImg
        src={src}
        alt={alt}
      />
      {isSelected && <Icon icon="CircleChecked" />}
      <S.ImageCheckBoxText>{children}</S.ImageCheckBoxText>
    </S.ImgCheckBoxWrapper>
  )
}

export default ImgCheckBox
