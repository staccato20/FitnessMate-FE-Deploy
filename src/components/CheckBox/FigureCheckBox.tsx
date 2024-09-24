import Icon from "@components/Icon/Icon"

import { StrictPropsWithChildren } from "@typpes/type"

import * as S from "./StyledCheckBox"

interface FigureCheckBoxProps {
  $isChecked: boolean
  handleCheckItem: (index: number) => void
  index: number
}

const FigureCheckBox = ({
  children,
  $isChecked,
  handleCheckItem,
  index,
}: StrictPropsWithChildren<FigureCheckBoxProps>) => {
  return (
    <S.FigureCheckBoxWrapper
      $isChecked={$isChecked}
      onClick={() => {
        handleCheckItem(index)
      }}
      type="button">
      <Icon icon={$isChecked ? "CircleFill" : "CircleEmpty"} />
      <S.FigureCheckBoxText $isChecked={$isChecked}>
        {children}
      </S.FigureCheckBoxText>
    </S.FigureCheckBoxWrapper>
  )
}

export default FigureCheckBox
