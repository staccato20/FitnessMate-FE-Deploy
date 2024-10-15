// @ts-nocheck
import IconButton from "@components/IconButton/IconButton"

import * as S from "./StyledRatio"

const Ratio = ({ ratioValue, ratioText, handleRatio }) => {
  return (
    <S.RatioWrapper>
      <S.RatioTitle>상/하체 균형을 조절해주세요</S.RatioTitle>
      <S.RatioBoxWrapper>
        <S.RatioBox>
          <S.RatioContent>
            <S.RatioBoxTitle>상체 비중</S.RatioBoxTitle>
            <S.RatioPercentBox>
              <S.RatioPercent>{ratioValue * 10}%</S.RatioPercent>
            </S.RatioPercentBox>
          </S.RatioContent>
          <S.RatioButtonBox>
            <IconButton
              type="button"
              size={28}
              icon="AddRound"
              onClick={() => handleRatio("+")}
            />
            <IconButton
              type="button"
              icon="MinusRound"
              size={28}
              onClick={() => handleRatio("-")}
            />
          </S.RatioButtonBox>
        </S.RatioBox>
        <S.RatioBox>
          <S.RatioContent>
            <S.RatioBoxTitle>하체 비중</S.RatioBoxTitle>
            <S.RatioPercentBox>
              <S.RatioPercent>{100 - ratioValue * 10}%</S.RatioPercent>
            </S.RatioPercentBox>
          </S.RatioContent>
          <S.RatioButtonBox>
            <IconButton
              size={28}
              icon="MinusRound"
              type="button"
              onClick={() => handleRatio("-")}
            />
            <IconButton
              icon="AddRound"
              type="button"
              size={28}
              onClick={() => handleRatio("+")}
            />
          </S.RatioButtonBox>
        </S.RatioBox>
      </S.RatioBoxWrapper>
      <S.RatioMessage>{ratioText}</S.RatioMessage>
    </S.RatioWrapper>
  )
}

export default Ratio
