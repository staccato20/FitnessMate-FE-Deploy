import { useNavigate } from "react-router-dom"

import { DUMMY_RECOOMEND } from "constants/DUMMY"

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

      <S.ResultList>
        {DUMMY_RECOOMEND.map(
          ({
            recommendId,
            koreanName,
            videoLink,
            description,
            requestedBodyParts,
            weight,
            repeat,
            set,
          }) => (
            <Accordion key={recommendId}>
              <Accordion.Header
                onClick={() => {
                  console.log("1")
                }}
                bodyParts={requestedBodyParts.toString()}
                count={1}>
                {koreanName}
              </Accordion.Header>
              <Accordion.Content
                videoId={videoLink.split("=")[1]}
                recommend={[`${weight}kg`, `${set}세트`, `${repeat}회`]}>
                {description}
              </Accordion.Content>
              <Accordion.Trigger />
            </Accordion>
          ),
        )}
      </S.ResultList>
    </S.RecommendWrapper>
  )
}
export default Result
