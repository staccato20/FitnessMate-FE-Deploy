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
              icon="AddRound"
              onClick={() => handleRatio("+")}
            />
            <IconButton
              icon="MinusRound"
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
              icon="MinusRound"
              onClick={() => handleRatio("-")}
            />
            <IconButton
              icon="AddRound"
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
