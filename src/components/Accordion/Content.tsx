import YouTube, { YouTubeProps } from "react-youtube"

import { useAccordion } from "@components/Accordion/Accordion"
import {
  ContentAI,
  ContentAIleft,
  ContentAIright,
  ContentAIrightItem,
  ContentText,
  ContentWrapper,
  VideoWrapper,
} from "@components/Accordion/StyledAccordion"
import Icon from "@components/Icon/Icon"

import { StrictPropsWithChildren } from "@typpes/type"

const opts: YouTubeProps["opts"] = {
  width: "100%",
  height: 350,
}

interface ContentProps {
  videoId: string
  recommend: string[]
}

const Content = ({
  children,
  recommend,
  videoId,
}: StrictPropsWithChildren<ContentProps>) => {
  const { visible } = useAccordion()

  return (
    visible && (
      <ContentWrapper>
        <ContentText>{children}</ContentText>
        <ContentAI>
          <ContentAIleft>
            <Icon icon="Star" />
            AI 추천 운동량
          </ContentAIleft>
          <ContentAIright>
            {recommend.map((item) => (
              <ContentAIrightItem>{item}</ContentAIrightItem>
            ))}
          </ContentAIright>
        </ContentAI>
        <VideoWrapper>
          <YouTube
            opts={opts}
            videoId={videoId}
          />
        </VideoWrapper>
      </ContentWrapper>
    )
  )
}

export default Content
