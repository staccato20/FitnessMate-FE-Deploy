import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useScroll } from "hooks/useScroll"

import Avatar from "@components/Avatar/Avatar"
import RoundButton from "@components/Button/RoundButton"
import ImgCheckBox from "@components/CheckBox/ImgCheckBox"
import Footer from "@components/Footer/Footer"
import IconButton from "@components/IconButton/IconButton"
import ProgressBar from "@components/Progressbar/ProgressBar"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

import usePostMachineList from "@pages/Recommend/hooks/usePostMachineList"

import * as S from "../StyledRecommend"

// useQuery로 바꾸기
const Machine = () => {
  const { data: machines, isLoading } = usePostMachineList()

  const [machinesById, setMachinesById] = useState(new Set<number>())
  const numChecked = machinesById.size

  const scrollRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const position = useScroll(scrollRef)
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
    // postRecommend()
    navigate("/recommend/result")
  }

  if (isLoading) {
    return <div>gg</div>
  }

  return (
    <>
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
          <S.RecommendSwitchGuide $isGuideSwitch={position > 103}>
            <Avatar />
            <SpeechBubble>
              <SpeechBubble.MainText>
                사용 가능한 기구를 선택해주세요!
              </SpeechBubble.MainText>
            </SpeechBubble>
          </S.RecommendSwitchGuide>
        </S.Status>
        <S.RecommendInner ref={scrollRef}>
          <S.RecommendGuide
            ref={targetRef}
            $isGuideSwitch={position > 143}>
            <Avatar />
            <SpeechBubble isIcon>
              <SpeechBubble.MainText>
                사용 가능한 기구를 선택해주세요!
              </SpeechBubble.MainText>
              <SpeechBubble.SubText>
                선택한 부위에 필요한 기구만 보여드렸어요
              </SpeechBubble.SubText>
            </SpeechBubble>
          </S.RecommendGuide>

          <S.RecommendMachineWrapper>
            {machines?.map(({ englishName, koreanName, id }) => (
              <ImgCheckBox
                key={englishName}
                src="https://github.com/user-attachments/assets/6711e495-0014-42d3-9afd-490015d3adf5"
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
            // disabled={!isReady}
          >
            추천 시작하기
          </RoundButton>
        </Footer>
      </S.RecommendWrapper>
    </>
  )
}

export default Machine
