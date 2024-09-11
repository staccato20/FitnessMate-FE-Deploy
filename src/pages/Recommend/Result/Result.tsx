import { useNavigate } from "react-router-dom"

import { DUMMY_RECOOMEND } from "constants/DUMMY"

import Accordion from "@components/Accordion/Accordion"
import Icon from "@components/Icon/Icon"
import Title from "@components/Title/Title"

import * as S from "../StyledRecommend"

const Result = () => {
  const navigate = useNavigate()

  const handleHomePage = () => {
    navigate("/")
  }

  return (
    <S.RecommendAllWrapper>
      <S.RecommendWrapper>
        <S.TitleWrapper>
          <S.TitleContainer>
            <Icon icon="Star" />
            <Title variant="big">
              김정욱님에게 맞는
              <br />
              4가지 운동을 추천했어요.
              <Title.SubBottomTitle>
                내 운동 루틴에 추가해보세요.
              </Title.SubBottomTitle>
            </Title>
          </S.TitleContainer>
        </S.TitleWrapper>

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
    </S.RecommendAllWrapper>
  )
}
export default Result
