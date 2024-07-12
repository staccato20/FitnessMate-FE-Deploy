// @ts-nocheck
import FigureCheckBox from "@components/CheckBox/FigureCheckBox"

import * as S from "./StyledFigure"

const FigureOptionItem = ({ children, selectedFigure, handleSelectFigure }) => {
  return (
    <S.FigureOptionList>
      {children?.map((figure, index) => (
        <FigureCheckBox
          handleCheckItem={handleSelectFigure}
          $isChecked={selectedFigure === index}
          key={figure[0]}
          index={index}>
          {figure[0]}
        </FigureCheckBox>
      ))}
    </S.FigureOptionList>
  )
}

export default FigureOptionItem
