import Icon from "@components/Icon/Icon"

import { useFigure } from "@pages/Signup/BodyFigure/components/Figure/FigureContext"
import { CATEGORY_LIST } from "@pages/Signup/constants/Constants"

import * as S from "./StyledFigure"

const FigureOption = () => {
  const { activeFigure, switchFigure } = useFigure()

  return (
    <S.FigureOptionList>
      {CATEGORY_LIST.map(({ id, name }) => {
        const $isChecked = id === activeFigure
        return (
          <S.FigureCheckBoxButton
            key={id}
            $isChecked={$isChecked}
            onClick={() => {
              switchFigure(id)
            }}>
            <Icon icon={$isChecked ? "CircleFill" : "CircleEmpty"} />
            <S.FigureCheckBoxText $isChecked={$isChecked}>
              {name}
            </S.FigureCheckBoxText>
          </S.FigureCheckBoxButton>
        )
      })}
    </S.FigureOptionList>
  )
}

export default FigureOption
