import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Avatar from "@components/Avatar/Avatar"
import Bottom from "@components/Bottom/Bottom"
import RoundButton from "@components/Button/RoundButton"
import ImgCheckBox from "@components/CheckBox/ImgCheckBox"
import IconButton from "@components/IconButton/IconButton"
import ProgressBar from "@components/Progressbar/ProgressBar"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

import { useRecommendStore } from "@pages/Recommend/store"

import { useGetBodyPart } from "@hooks/query/useGetBodyPart"

import * as S from "../StyledRecommend"

const BodyPart = () => {
  const { bodyParts = [] } = useGetBodyPart("recommend")

  const [selectedBodyParts, setSelectedBodyParts] = useState<number[]>([])

  const { setBodyPart } = useRecommendStore()

  const isReady = selectedBodyParts.some((v) => v)

  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(-1)
  }

  const handleBodyPart = (bodyPartIdx: number) => {
    selectedBodyParts.includes(bodyPartIdx)
      ? setSelectedBodyParts([
          ...selectedBodyParts.filter((idx) => idx !== bodyPartIdx),
        ])
      : setSelectedBodyParts([...selectedBodyParts, bodyPartIdx])
  }

  const handleNextPage = () => {
    const koreanBodyParts = selectedBodyParts.map(
      (idx) => bodyParts[idx].koreanName,
    )
    setBodyPart(koreanBodyParts)
    navigate("/recommend/machine")
  }

  return (
    <S.RecommendWrapper>
      <S.Status>
        <IconButton
          icon="LeftArrowBold"
          onClick={handleBackPage}
        />
        <ProgressBar
          progress={2}
          variant="round"
        />
      </S.Status>
      <S.RecommendInner>
        <S.RecommendGuide>
          <Avatar />
          <SpeechBubble>
            <SpeechBubble.MainText>
              어떤 부위의 운동을 추천해드릴까요?
            </SpeechBubble.MainText>
          </SpeechBubble>
        </S.RecommendGuide>
        <S.BodyPartWrapper>
          <S.TabWrapper key="상체">
            <S.TabTitle>{"상체"}</S.TabTitle>
            <S.TabList>
              {bodyParts
                .slice(0, 6)
                .map(({ englishName, koreanName, imgPath }, posIndex) => (
                  <ImgCheckBox
                    key={englishName}
                    src={imgPath}
                    alt="테스트 이미지"
                    handleToggle={() => {
                      handleBodyPart(posIndex)
                    }}
                    isSelected={selectedBodyParts.includes(posIndex)}
                    variant="small">
                    {koreanName}
                  </ImgCheckBox>
                ))}
            </S.TabList>
          </S.TabWrapper>
          <S.TabWrapper key="하체">
            <S.TabTitle>{"하체"}</S.TabTitle>
            <S.TabList>
              {bodyParts
                .slice(6)
                .map(({ englishName, koreanName, imgPath }, posIndex) => (
                  <ImgCheckBox
                    key={englishName}
                    src={imgPath}
                    alt="테스트 이미지"
                    handleToggle={() => {
                      handleBodyPart(posIndex + 6)
                    }}
                    isSelected={selectedBodyParts.includes(posIndex + 6)}
                    variant="small">
                    {koreanName}
                  </ImgCheckBox>
                ))}
            </S.TabList>
          </S.TabWrapper>
        </S.BodyPartWrapper>
      </S.RecommendInner>
      <Bottom flex="space-between">
        <Bottom.Text>
          {selectedBodyParts.length}개
          <Bottom.SubText> 부위 선택됨</Bottom.SubText>
        </Bottom.Text>
        <RoundButton
          onClick={handleNextPage}
          variant="black"
          size="big"
          rightIcon="RightArrowWhite"
          disabled={!isReady}>
          다음
        </RoundButton>
      </Bottom>
    </S.RecommendWrapper>
  )
}
export default BodyPart
