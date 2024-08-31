import YouTube, { YouTubeProps } from "react-youtube"

import { styled } from "styled-components"

import { useAccordion } from "@components/Accordion/Accordion"
import Icon from "@components/Icon/Icon"

import { StrictPropsWithChildren } from "@typpes/type"

import theme, { fonts } from "@styles/theme"

const opts: YouTubeProps["opts"] = {
  width: "100%",
  height: 350,
}

const Content = ({ children }: StrictPropsWithChildren) => {
  const { visible } = useAccordion()

  return (
    visible && (
      <ContentWrapper>
        <ContentText>
          팔굽혀펴기 또는 푸쉬업은 대표적인 근력 운동 중 하나이다. 일반적으로
          기구 등을 사용하지 않고 할 수 있는 운동으로, 엎드린 상태에서 전신의
          체중을 두 손과 두 발가락의 4개소에 집중하여 양팔을 늘리는 힘에 의해
          신체를 올린다. 동작과 팔꿈치 관절을 굽혀 몸을 지상에 붙지 않을
          정도까지 낮추고, 반복하는 것이 기본적인 방법이다. 군대에서 기본적인
          얼차려로 많이 적용된다.
        </ContentText>
        <ContentAI>
          <ContentAIleft>
            <Icon icon="Star" />
            AI 추천 운동량
          </ContentAIleft>
          <ContentAIright>
            <ContentAIrightItem>20kg</ContentAIrightItem>
            <ContentAIrightItem>5세트</ContentAIrightItem>
            <ContentAIrightItem>12회</ContentAIrightItem>
          </ContentAIright>
        </ContentAI>
        <VideoWrapper>
          <YouTube
            opts={opts}
            videoId={
              "https://www.youtube.com/watch?v=XIxSN7OewtA".split("=")[1]
            }
          />
        </VideoWrapper>
      </ContentWrapper>
    )
  )
}

export default Content

export const VideoWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ContentText = styled.span`
  color: ${theme.Netural800};
  ${fonts.b4};
  line-height: 165%;
  letter-spacing: -0.16px;
`
export const ContentAI = styled.span`
  display: flex;
  padding: 14px 16px;
  align-items: center;
  gap: 32px;
  border-radius: 10px;
  border: 2px solid #0b98ff;
  background: #eef7ff;
`

export const ContentAIleft = styled.div`
  color: ${theme.Brand600};
  ${fonts.b6};
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    width: 24px;
    height: 24px;
  }
`

export const ContentAIright = styled.div`
  display: flex;
  height: 24px;
  align-items: center;
  gap: 14px;
`

export const ContentAIrightItem = styled.div`
  color: ${theme.Brand600};
  ${fonts.h4};
`
