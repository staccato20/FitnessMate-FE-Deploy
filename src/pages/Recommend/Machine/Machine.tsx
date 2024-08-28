import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Avatar from "@components/Avatar/Avatar"
import Button from "@components/Button/Button"
import ImgCheckBox from "@components/CheckBox/ImgCheckBox"
import Footer from "@components/Footer/Footer"
import IconButton from "@components/IconButton/IconButton"
import ProgressBar from "@components/Progressbar/ProgressBar"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

import * as S from "../StyledRecommend"

const DUMMY_MACHINE = [
  {
    englishName: "Dips Station",
    koreanName: "딥스 스테이션",
  },
  {
    englishName: "Dips Bar",
    koreanName: "딥스바",
  },
  {
    englishName: "Pull Down Machine",
    koreanName: "풀 다운 머신",
  },
  {
    englishName: "Row Machine",
    koreanName: "로우 머신",
  },
  {
    englishName: "Crunch Machine",
    koreanName: "크런치 머신",
  },
  {
    englishName: "Parallel Dip Machine",
    koreanName: "패러렐 딥 머신",
  },
  {
    englishName: "Roman Chair",
    koreanName: "로만 체어",
  },
  {
    englishName: "Gym Ball",
    koreanName: "짐볼",
  },
  {
    englishName: "BOSU Ball",
    koreanName: "보수볼",
  },
  {
    englishName: "Theraband",
    koreanName: "세라 밴드",
  },
  {
    englishName: "Shoulder Press Machine",
    koreanName: "숄더프레스 머신",
  },
  {
    englishName: "Leg Extension Machine",
    koreanName: "레그 익스텐션 머신",
  },
  {
    englishName: "Power Leg Press Machine",
    koreanName: "파워 레그프레스 머신",
  },
  {
    englishName: "Leg Press Machine",
    koreanName: "레그프레스 머신",
  },
  {
    englishName: "Hack Squat Machine",
    koreanName: "핵스쿼트 머신",
  },
  {
    englishName: "Cable Machine",
    koreanName: "케이블 머신",
  },
  {
    englishName: "Decline Bench",
    koreanName: "디클라인 벤치",
  },
  {
    englishName: "Incline Bench",
    koreanName: "인클라인 벤치",
  },
  {
    englishName: "Flat Bench",
    koreanName: "플랫 벤치",
  },
  {
    englishName: "Smith Machine",
    koreanName: "스미스머신",
  },
  {
    englishName: "Squat Rack",
    koreanName: "스쿼트랙",
  },
  {
    englishName: "Half Rack",
    koreanName: "하프랙",
  },
  {
    englishName: "Power Rack",
    koreanName: "파워랙",
  },
  {
    englishName: "Kettlebell",
    koreanName: "케틀벨",
  },
  {
    englishName: "Dumbbell",
    koreanName: "덤벨",
  },
  {
    englishName: "EZ Bar",
    koreanName: "이지바",
  },
  {
    englishName: "Barbell",
    koreanName: "바벨",
  },
]

const Machine = () => {
  const [selectedMachines, setSelectedMachines] = useState(
    Array(DUMMY_MACHINE.length).fill(false),
  )

  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(-1)
  }

  const handleBodyPart = (machineIdx: number) => {
    setSelectedMachines(
      selectedMachines.map((machine, idx) =>
        idx === machineIdx ? !machine : machine,
      ),
    )
  }

  const handleNextPage = () => {}

  return (
    <>
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
            <SpeechBubble.MainText>
              사용 가능한 기구를 선택해주세요!
            </SpeechBubble.MainText>
            <SpeechBubble.SubText>
              선택한 부위에 필요한 기구만 보여드렸어요
            </SpeechBubble.SubText>
          </SpeechBubble>
        </S.RecommendGuide>
        <S.RecommendMachineWrapper>
          {DUMMY_MACHINE.map(({ koreanName: machine }, machineIdx) => (
            <ImgCheckBox
              key={machine}
              src="https://github.com/user-attachments/assets/6711e495-0014-42d3-9afd-490015d3adf5"
              alt="테스트 이미지를 설명"
              isSelected={selectedMachines[machineIdx]}
              handleToggle={() => {
                handleBodyPart(machineIdx)
              }}
              variant="big">
              {machine}
            </ImgCheckBox>
          ))}
        </S.RecommendMachineWrapper>
        <Footer>
          <Footer.Text>
            {selectedMachines.filter((v) => v).length}개
            <Footer.SubText> 기구 선택됨</Footer.SubText>
          </Footer.Text>
          <Button onClick={handleNextPage}>추천 시작하기</Button>
        </Footer>
      </S.RecommendWrapper>
    </>
  )
}
export default Machine
