import { css } from "styled-components"

import { StrictPropsWithChildren } from "@typpes/type"

import { fonts } from "@styles/theme"
import { theme } from "@styles/theme"

import * as S from "./StyledTitle"

interface TitleProps {
  variant: (typeof Variant)[number]
}

export const Variant = ["big", "mid", "small"] as const

export const VARIANTS = {
  big: css`
    color: ${theme.Netural900};
    ${fonts.h1};
    .topTitleText {
      color: ${theme.Brand750};
      ${fonts.b6};
    }

    .bottomTitleText {
      color: ${theme.Netural800};
      ${fonts.b4};
    }
  `,
  mid: css`
    color: ${theme.Netural990};
    ${fonts.h2};
    .topTitleText {
      color: ${theme.Brand750};
      ${fonts.d1};
    }
    .bottomTitleText {
      color: ${theme.Netural800};
      ${fonts.b4};
    }
  `,
  small: css`
    color: ${theme.Netural990};
    ${fonts.h3};
    .topTitleText {
      color: ${theme.Brand750};
      ${fonts.d2};
    }
    .bottomTitleText {
      color: ${theme.Netural800};
      ${fonts.b6};
    }
  `,
}

const Title = ({ variant, children }: StrictPropsWithChildren<TitleProps>) => {
  const variantStyle = VARIANTS[variant]

  return (
    <S.TitleWrapper $variantStyle={variantStyle}>{children}</S.TitleWrapper>
  )
}

const SubTopTitle = ({ children }: StrictPropsWithChildren) => (
  <S.SubTopTitleText className="topTitleText">{children}</S.SubTopTitleText>
)
const SubBottomTitle = ({ children }: StrictPropsWithChildren) => (
  <S.SubBottomTitleText className="bottomTitleText">
    {children}
  </S.SubBottomTitleText>
)

Title.SubTopTitle = SubTopTitle
Title.SubBottomTitle = SubBottomTitle

export default Title
