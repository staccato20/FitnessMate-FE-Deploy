import { useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import IconButton from "@components/IconButton/IconButton"
import AlertLoadingModal from "@components/Modal/components/Alert/AlertLoadingModal"
import ProgressBar from "@components/Progressbar/ProgressBar"

import Footer from "@pages/Recommend/Machine/Footer"
import List from "@pages/Recommend/Machine/List"
import { BackOverlay } from "@pages/Search/StyledSearch"

import { usePostRecommend } from "@hooks/mutation/usePostRecommend"
import { useGetMachineList } from "@hooks/query/useGetMachineList"
import { useLoading } from "@hooks/useLodaing"
import { useScroll } from "@hooks/useScroll"

import * as GS from "../StyledRecommend"
import * as S from "./StyledMachine"

interface RouteState {
  state: string[]
}

const Machine = () => {
  const navigate = useNavigate()

  const [machinesById, setMachinesById] = useState(new Set<number>())
  const scrollRef = useRef<HTMLDivElement>(null)
  const { isScrollTop } = useScroll(scrollRef)
  const { coverAnimation, textAnimation } = useLoading()

  const { state: bodyPart } = useLocation() as RouteState

  const { data: machines = [] } = useGetMachineList(bodyPart)
  const postRecommend = usePostRecommend()

  const updateSet = (set: Set<number>, id: number) => {
    const updatedSet = new Set(set)
    void (updatedSet.has(id) ? updatedSet.delete(id) : updatedSet.add(id))
    return updatedSet
  }

  const handleBodyPart = (id: number) => {
    setMachinesById((prevSet) => updateSet(prevSet, id))
  }

  const handleBackPage = () => {
    navigate(-1)
  }

  return (
    <>
      {postRecommend.isPending && (
        <>
          <BackOverlay />
          <S.LayerWrapper>
            <S.CoverWrapper {...coverAnimation} />
            <S.LoadingText {...textAnimation}>
              추천을 위한
              <br /> 분석을 시작했어요
            </S.LoadingText>
          </S.LayerWrapper>
        </>
      )}

      <GS.RecommendWrapper>
        <GS.Status $isScrollTop={isScrollTop}>
          <IconButton
            icon="LeftArrowBold"
            size={30}
            onClick={handleBackPage}
          />
          <ProgressBar progress={2} />
        </S.Status>
        <S.RecommendInner ref={scrollRef}>
          <S.RecommendGuideWrapper>
            <S.RecommendGuide
              initial={{ transform: "translate(-50%, -50%)" }}
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
          </S.RecommendGuideWrapper>

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

        <Bottom flex="space-between">
          <Bottom.Text>
            {numChecked}개<Bottom.SubText> 기구 선택됨</Bottom.SubText>
          </Bottom.Text>
          {numChecked > 0 ? (
            <RoundButton
              onClick={handleRecommend}
              variant="blue"
              rightIcon="RightArrowWhite"
              size="big"
              isPending={postRecommend.isPending}>
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
          ) : (
            <RoundButton
              onClick={handleRecommend}
              variant="black"
              rightIcon="RightArrowWhite"
              size="big"
              isPending={postRecommend.isPending}>
              {postRecommend.isPending ? (
                <BeatLoader
                  size="7"
                  color="#DDEAF4"
                  margin={6}
                />
              ) : (
                "기구 선택 없이 추천 받기"
              )}
            </RoundButton>
          )}
        </Bottom>
      </S.RecommendWrapper>
    </>
  )
}

export default Machine
