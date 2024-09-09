// @ts-nocheck
import Icon from "@components/Icon/Icon"

import * as S from "./StyledCheckBox"

const CheckBox = ({ children, $isChecked, handleCheckItem, index }) => {
  return (
    <S.CheckBoxWrapper
      $isChecked={$isChecked}
      onClick={() => {
        handleCheckItem(index)
      }}
      type="button">
      <Icon
        $isChecked={$isChecked}
        icon={$isChecked ? "CircleFill" : "CircleEmpty"}
      />
      <S.CheckBoxText>{children}</S.CheckBoxText>
    </S.CheckBoxWrapper>
  )
}

export default CheckBox
