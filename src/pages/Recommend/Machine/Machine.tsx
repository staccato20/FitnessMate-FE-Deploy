import { useNavigate } from "react-router-dom"

import Avatar from "@components/Avatar/Avatar"
import IconButton from "@components/IconButton/IconButton"
import ProgressBar from "@components/Progressbar/ProgressBar"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

import * as S from "../StyledRecommend"

const Machine = () => {
  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(-1)
  }

  const handleUpdate = () => {}

  return (
    <S.RecommendWrapper>
      <S.Status>
        <IconButton
          icon="LeftArrowBold"
          onClick={handleBackPage}
        />
        <ProgressBar progress={1} />
      </S.Status>
      <S.RecommendGuide>
        <Avatar />
        <SpeechBubble>
          <SpeechBubble.MainText>
            어떤 부위의 운동을 추천해드릴까요?
          </SpeechBubble.MainText>
        </SpeechBubble>
      </S.RecommendGuide>
    </S.RecommendWrapper>
  )
}
export default Machine
