import { AnimatePresence } from "framer-motion"

import { useAccordion } from "@components/Accordion/Accordion"
import {
  AnimationWrapper,
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
    <AnimatePresence initial={false}>
      {visible && (
        <ContentWrapper
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}>
          <AnimationWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 0, bounce: 0 }}>
            <ContentText>{children}</ContentText>
            <ContentAI>
              <ContentAIleft>
                <Icon
                  icon="Star"
                  size={32}
                />
                AI 추천 운동량
              </ContentAIleft>
              <ContentAIright>
                {recommend.map((item) => (
                  <ContentAIrightItem key={item}>{item}</ContentAIrightItem>
                ))}
              </ContentAIright>
            </ContentAI>
            <VideoWrapper>
              <iframe
                style={{ width: "100%", height: "100%" }}
                src={`https://www.youtube.com/embed/${videoId}`}
              />
            </VideoWrapper>
          </AnimationWrapper>
        </ContentWrapper>
      )}
    </AnimatePresence>
  )
}

export default Content
