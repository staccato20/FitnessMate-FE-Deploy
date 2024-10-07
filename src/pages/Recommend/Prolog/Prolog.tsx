import { useNavigate } from "react-router-dom"

import Avatar from "@components/Avatar/Avatar"
import Bottom from "@components/Bottom/Bottom"
import Button from "@components/Button/Button"
import RoundButton from "@components/Button/RoundButton"
import IconButton from "@components/IconButton/IconButton"
import ProgressBar from "@components/Progressbar/ProgressBar"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

import { useGetUser } from "@hooks/query/useGetUser"

import * as S from "../StyledRecommend"

const Prolog = () => {
  const navigate = useNavigate()
  const userInfo = useGetUser()

  const handleBackPage = () => {
    navigate(-1)
  }

  const handleNextPage = () => {
    navigate("/recommend/bodypart")
  }

  const handleUpdate = () => {
    alert("현재 수정중인 기능입니다!")
    // navigate("/mypage")
  }

  return (
    <S.RecommendWrapper>
      <S.Status>
        <IconButton
          icon="LeftArrowBold"
          onClick={handleBackPage}
        />
        <ProgressBar
          progress={1}
          variant="round"
        />
      </S.Status>
      <S.RecommendGuide>
        <Avatar />
        <SpeechBubble>
          <SpeechBubble.MainText>
            아래의 정보로 추천을 시작할까요?
          </SpeechBubble.MainText>
        </SpeechBubble>
      </S.RecommendGuide>
      <S.RecommendUserInfo>
        <S.UserName>{userInfo?.userName}</S.UserName>
        <S.UserInfoList>
          <S.UserInfoItem>
            <S.UserInfoName>키</S.UserInfoName>
            <S.UserInfoValue>175cm</S.UserInfoValue>
          </S.UserInfoItem>
          <S.UserInfoItem>
            <S.UserInfoName>몸무게</S.UserInfoName>
            <S.UserInfoValue>70kg</S.UserInfoValue>
          </S.UserInfoItem>
          <S.UserInfoItem>
            <S.UserInfoName>체형</S.UserInfoName>
            <S.UserInfoValue>상체발달형</S.UserInfoValue>
          </S.UserInfoItem>
        </S.UserInfoList>
        <Button
          variant="weak"
          onClick={handleUpdate}>
          수정하기
        </Button>
      </S.RecommendUserInfo>
      <Bottom flex="flex-end">
        <RoundButton
          rightIcon="RightArrowWhite"
          onClick={handleNextPage}
          size="big">
          시작하기
        </RoundButton>
      </Bottom>
    </S.RecommendWrapper>
  )
}
export default Prolog
