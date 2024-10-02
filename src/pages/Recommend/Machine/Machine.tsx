import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BeatLoader } from "react-spinners"

import Avatar from "@components/Avatar/Avatar"
import RoundButton from "@components/Button/RoundButton"
import ImgCheckBox from "@components/CheckBox/ImgCheckBox"
import Footer from "@components/Footer/Footer"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import ProgressBar from "@components/Progressbar/ProgressBar"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

import { useRecommendStore } from "@pages/Recommend/store"

import { usePostRecommend } from "@hooks/mutation/usePostRecommend"
import { usePostRecommendId } from "@hooks/mutation/usePostRecommendId"
import { useGetMachineList } from "@hooks/query/useGetMachineList"
import { useScroll } from "@hooks/useScroll"

import { animation } from "@styles/theme"

import * as S from "../StyledRecommend"

const Machine = () => {
  const { data: machines = [] } = useGetMachineList()
  const { bodyPart } = useRecommendStore()
  const postRecommendId = usePostRecommendId()
  const postRecommend = usePostRecommend()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [_, isScrollTop] = useScroll(scrollRef)

  const { setResult } = useRecommendStore()

  const [machinesById, setMachinesById] = useState(new Set<number>())
  const numChecked = machinesById.size
  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(-1)
  }

  const updateSet = (set: Set<number>, id: number) => {
    const updatedSet = new Set(set)

    if (updatedSet.has(id)) {
      updatedSet.delete(id)
    } else {
      updatedSet.add(id)
    }

    return updatedSet
  }

  const handleBodyPart = (id: number) => {
    setMachinesById((prevSet) => updateSet(prevSet, id))
  }

  const handleRecommend = () => {
    const payload = {
      bodyPartKoreanName: bodyPart,
      machineKoreanName: [...machinesById].map((id) => machines[id].koreanName),
    }

    postRecommendId(payload, {
      onSuccess: (workoutRecommendationId) => {
        postRecommend.mutate(workoutRecommendationId, {
          onSuccess: (result) => {
            setResult(result)
            navigate("/recommend/result")
          },
        })
      },
    })
  }

  return (
    <>
      {postRecommend.isPending && (
        <S.CoverWrapper>
          <Icon icon="LoadingBackground" />
          <S.LoadingText>
            추천을 위한
            <br /> 분석을 시작했어요
          </S.LoadingText>
        </S.CoverWrapper>
      )}

      <S.RecommendWrapper>
        <S.Status>
          <IconButton
            icon="LeftArrowBold"
            onClick={handleBackPage}
          />
          <ProgressBar
            progress={3}
            variant="round"
          />
        </S.Status>
        <S.RecommendInner ref={scrollRef}>
          <S.RecommendGuide
            animate={
              isScrollTop
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.8, y: -20 }
            }
            transition={{ ...animation.quick }}>
            <Avatar />
            <SpeechBubble>
              <SpeechBubble.MainText>
                사용 가능한 기구를 선택해주세요!
              </SpeechBubble.MainText>
            </SpeechBubble>
          </S.RecommendGuide>

          <S.RecommendMachineWrapper
            animate={isScrollTop ? { y: "0px" } : { y: "-450px" }}
            transition={{ ...animation.small }}>
            {machines?.map(({ englishName, koreanName, id, imgPath }) => (
              <ImgCheckBox
                key={englishName}
                src={imgPath}
                alt="테스트 이미지를 설명"
                isSelected={machinesById.has(id)}
                handleToggle={() => handleBodyPart(id)}
                variant="big">
                {koreanName}
              </ImgCheckBox>
            ))}
          </S.RecommendMachineWrapper>
        </S.RecommendInner>

        <Footer flex="space-between">
          <Footer.Text>
            {numChecked}개<Footer.SubText> 기구 선택됨</Footer.SubText>
          </Footer.Text>
          <RoundButton
            onClick={handleRecommend}
            variant="blue"
            rightIcon="RightArrowWhite"
            size="big"
            isPending={postRecommend.isPending}
            disabled={!numChecked}>
            {postRecommend.isPending ? (
              <BeatLoader
                size="7"
                color="#DDEAF4"
                margin={6}
              />
            ) : (
              "추천 시작하기"
            )}
          </RoundButton>
        </Footer>
      </S.RecommendWrapper>
    </>
  )
}

export default Machine
