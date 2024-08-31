import { useNavigate } from "react-router-dom"

import Accordion from "@components/Accordion/Accordion"
import Avatar from "@components/Avatar/Avatar"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import ProgressBar from "@components/Progressbar/ProgressBar"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

import * as S from "../StyledRecommend"

const Result = () => {
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
          <SpeechBubble.Icon>
            <Icon icon={"Star"} />
          </SpeechBubble.Icon>
          <SpeechBubble.MainText>
            정욱님을 위한 추천이 완료됐어요
          </SpeechBubble.MainText>
        </SpeechBubble>
      </S.RecommendGuide>

      <Accordion>
        <Accordion.Header>gg</Accordion.Header>
        <Accordion.Content>gg</Accordion.Content>
      </Accordion>
    </S.RecommendWrapper>
  )
}
export default Result
