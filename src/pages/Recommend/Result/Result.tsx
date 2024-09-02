import { useNavigate } from "react-router-dom"

import { DUMMY_RECOOMEND } from "constants/DUMMY"

import Accordion from "@components/Accordion/Accordion"
import Icon from "@components/Icon/Icon"

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
            <S.TitleInfo>
              <S.TitleLeft>
                김정욱님에게 맞는
                <br />
                <span className="bold">4가지 운동</span>을 추천했어요.
              </S.TitleLeft>
              <S.TitleRight onClick={handleHomePage}>{"홈으로 →"}</S.TitleRight>
            </S.TitleInfo>
          </S.TitleContainer>
          <S.KeyWordWrapper>
            적용된 추천 키워드
            <S.KeyWordList>
              <S.KeyWordItem>운동추천</S.KeyWordItem>
              <S.KeyWordItem>
                {DUMMY_RECOOMEND[0].requestedBodyParts[0]}
              </S.KeyWordItem>
              <S.KeyWordItem>
                {`${DUMMY_RECOOMEND.length}가지의 운동기구`}
              </S.KeyWordItem>
            </S.KeyWordList>
          </S.KeyWordWrapper>
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
