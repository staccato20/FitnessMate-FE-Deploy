import { useNavigate } from "react-router-dom"

import Avatar from "@components/Avatar/Avatar"
import IconButton from "@components/IconButton/IconButton"
import ProgressBar from "@components/Progressbar/ProgressBar"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"
import Tabs from "@components/Tabs/Tabs"

import * as S from "../StyledRecommend"

const DUMMY_BODYPART = {
  상체: ["등", "가슴"],
  하체: ["다리", "엉덩이"],
}

const Machine = () => {
  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(-1)
  }

  const handleUpdate = () => {}

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
          <SpeechBubble.MainText>
            어떤 부위의 운동을 추천해드릴까요?
          </SpeechBubble.MainText>
        </SpeechBubble>
      </S.RecommendGuide>
      <Tabs>
        <Tabs.TabList>
          {Object.entries(DUMMY_BODYPART).map(([pos, bodypart], index) => {
            return (
              <Tabs.Tab
                index={index}
                variant="line"
                key={index}
                count={bodypart.length}>
                {pos}
              </Tabs.Tab>
            )
          })}
        </Tabs.TabList>
        <Tabs.TabPanels>
          {Object.values(DUMMY_BODYPART).map((bodypart, index) => {
            return (
              <Tabs.TabPanel
                index={index}
                key={index}>
                {bodypart}
              </Tabs.TabPanel>
            )
          })}
        </Tabs.TabPanels>
      </Tabs>
    </S.RecommendWrapper>
  )
}
export default Machine
