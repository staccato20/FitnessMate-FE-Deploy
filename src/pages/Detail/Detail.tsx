import { useNavigate } from "react-router-dom"
import YouTube, { YouTubeProps } from "react-youtube"

import Badge from "@components/Badge/Badge"
import RoundButton from "@components/Button/RoundButton"

import Icon from "../../components/Icon/Icon"
import * as S from "./StyledDetail"

const opts: YouTubeProps["opts"] = {
  width: "100%",
  height: "408px",
  playerVars: {
    rel: 0,
    modestbranding: 1,
  },
}

const Detail = () => {
  const navigate = useNavigate()
  const handleRoutine = () => {
    alert("수정 중인 기능입니다!")
  }

  const handleBackPage = () => {
    navigate(-1)
  }

  return (
    <S.TotalWrapper>
      <S.BeforeButton onClick={handleBackPage}>
        <Icon icon="LeftArrow" />
        이전
      </S.BeforeButton>
      <S.DetailWrapper>
        <S.TitleWrapper>
          <S.Title>데드리프트</S.Title>
          <RoundButton
            leftIcon="Add"
            variant="blue"
            onClick={handleRoutine}>
            루틴에 추가
          </RoundButton>
        </S.TitleWrapper>
        <S.ContentWrapper>
          <S.ContentBox>
            <S.ContentImg
              src="https://fitness-mate.s3.ap-northeast-2.amazonaws.com/images/workout/8b8e358d-488e-4897-9389-eaab33ea7018.png"
              alt="운동 이미지"
            />
            <S.ContentInfoWrapper>
              <S.ContentInfoTopWrapper>
                <S.ContentInfoTopTitle>운동 설명</S.ContentInfoTopTitle>
                <S.ContentInfoTopText>
                  펙 덱 플라이(pec-deck-fly)는 대흉근을 발달시켜주는 운동이다.
                  패드에 팔을 고정하고 팔꿈치로 동작을 이끌며 천천히 양팔의
                  각도를 좁히고 벌리며 운동한다.
                </S.ContentInfoTopText>
              </S.ContentInfoTopWrapper>
              <S.ContentInfoBottomWrapper>
                <S.ContentInfoBottomTitle>운동 부위</S.ContentInfoBottomTitle>
                <S.ContentInfoBottomList>
                  {["가슴", "등", "어깨"].map((badge) => (
                    <Badge variant="fill">{badge}</Badge>
                  ))}
                </S.ContentInfoBottomList>
              </S.ContentInfoBottomWrapper>
            </S.ContentInfoWrapper>
          </S.ContentBox>
          <S.VideoWrapper>
            <YouTube
              opts={opts}
              loading="lazy"
              videoId="Og9pgOtL-04"
            />
          </S.VideoWrapper>
        </S.ContentWrapper>
      </S.DetailWrapper>
    </S.TotalWrapper>
  )
}

export default Detail
