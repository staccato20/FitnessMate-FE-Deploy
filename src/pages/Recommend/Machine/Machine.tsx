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

import { MachineList } from "@typpes/type"

import * as S from "../StyledRecommend"

// useQuery로 바꾸기
const Machine = () => {
  const [machines, setMachines] = useState<MachineList[]>([])
  const { data } = usePostMachineList()
  if (data && machines.length === 0) {
    setMachines(data)
  }

  const scrollRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const position = useScroll(scrollRef)
  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(-1)
  }

  // const handleBodyPart = (machineIdx: number) => {
  //   setMachines((prevSelected) =>
  //     prevSelected.map((machine, idx) =>
  //       idx === machineIdx ? !machine : machine,
  //     ),
  //   )
  // }

  const handleNextPage = () => {
    // 추천 시작하기 버튼 클릭 처리
    console.log(["등"])
    // postRecommend()
    navigate("/recommend/result")
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
            <SpeechBubble isIcon={false}>
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
            {machines.length > 0 &&
              machines.map(({ englishName, koreanName }, machineIdx) => (
                <ImgCheckBox
                  key={englishName}
                  src="https://github.com/user-attachments/assets/6711e495-0014-42d3-9afd-490015d3adf5"
                  alt="테스트 이미지를 설명"
                  // isSelected={machines[machineIdx]}
                  // handleToggle={() => handleBodyPart(machineIdx)}
                  variant="big">
                  {koreanName}
                </ImgCheckBox>
              ))}
          </S.RecommendMachineWrapper>
        </S.RecommendInner>

        <Footer flex="space-between">
          <Footer.Text>
            {machines.filter((v) => v).length}개
            <Footer.SubText> 기구 선택됨</Footer.SubText>
          </Footer.Text>
          <RoundButton
            onClick={handleNextPage}
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
