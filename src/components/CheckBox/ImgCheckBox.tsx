import { ButtonHTMLAttributes } from "react"

import { css } from "styled-components"

import Icon from "@components/Icon/Icon"

import { StrictPropsWithChildren } from "@typpes/type"

import theme from "@styles/theme"

import * as S from "./StyledCheckBox"

type Variant = "big" | "small"

const getVariant = (variant: Variant, isSelected: boolean) => {
  switch (variant) {
    case "big":
      return {
        sizeStyle: css`
          gap: 12px;
          width: 169px;
        `,
        borderStyle: css`
          border: ${isSelected
            ? `3.5px solid ${theme.Brand600}`
            : `1px solid ${theme.Netural300}`};
        `,
      }
    case "small":
      return {
        sizeStyle: css`
          gap: 8px;
          width: 114px;
        `,
        borderStyle: css`
          border: ${isSelected
            ? `3px solid ${theme.Brand600}`
            : `1px solid ${theme.Netural300}`};
        `,
      }
    default:
      return {
        sizeStyle: css``,
        borderStyle: css``,
      }
  }
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
  const { sizeStyle, borderStyle } = getVariant(variant, isSelected)

  return (
    <S.ImgCheckBoxWrapper
      $sizeStyle={sizeStyle}
      onClick={handleToggle}
      {...props}>
      <S.ImageCheckBoxImg
        $borderStyle={borderStyle}
        src={src}
        alt={alt}
      />
      {isSelected && (
        <Icon
          icon="CircleChecked"
          size={variant === "big" ? 58 : 44}
        />
      )}
      <S.ImageCheckBoxText>{children}</S.ImageCheckBoxText>
    </S.ImgCheckBoxWrapper>
  )
}

export default ImgCheckBox
