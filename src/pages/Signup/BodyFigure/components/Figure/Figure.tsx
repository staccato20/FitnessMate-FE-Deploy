import CheckBox from "@components/CheckBox/CheckBox"

import FigureOptionItem from "@pages/Signup/BodyFigure/components/Figure/FigureOptionItem"
import { CATEGORY_LIST } from "@pages/Signup/BodyFigure/constants/CATEGORY_LIST"

import BodyFigureOptionDirectItem from "./FigureOptionDirectItem"
import * as S from "./StyledFigure"

const Figure = ({
  selectedMenu,
  handleSelectMenu,
  selectedFigure,
  handleSelectFigure,
}) => {
  return (
    <S.FigureWrapper>
      <S.FigureTitle>어떤 체형이신가요?</S.FigureTitle>
      <S.FigureOptionList>
        <CheckBox
          $isChecked={selectedMenu === 0}
          index={0}
          handleCheckItem={handleSelectMenu}>
          유형으로 선택하기
        </CheckBox>
        {selectedMenu === 0 && (
          <FigureOptionItem
            selectedFigure={selectedFigure}
            handleSelectFigure={handleSelectFigure}>
            {CATEGORY_LIST}
          </FigureOptionItem>
        )}

        <CheckBox
          $isChecked={selectedMenu === 1}
          index={1}
          handleCheckItem={handleSelectMenu}>
          직접 입력하기
        </CheckBox>
        {selectedMenu === 1 && <BodyFigureOptionDirectItem />}
      </S.FigureOptionList>
    </S.FigureWrapper>
  )
}

export default Figure
