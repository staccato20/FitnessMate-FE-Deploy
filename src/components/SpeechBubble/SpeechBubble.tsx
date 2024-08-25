import { ReactNode } from "react"

import Icon from "@components/SpeechBubble/components/Icon"
import MainText from "@components/SpeechBubble/components/MainText"
import SubText from "@components/SpeechBubble/components/SubText"

import * as S from "./StyledSpeechBubble"

interface SpeechBubbleMainProps {
  children: ReactNode
}

const SpeechBubbleMain = ({ children }: SpeechBubbleMainProps) => (
  <S.SpeechBubbleWrapper
    $isMultiline={Array.isArray(children)}
    $isIcon={
      Array.isArray(children) && typeof children[0].props.children === "object"
    }>
    {children}
  </S.SpeechBubbleWrapper>
)

const SpeechBubble = Object.assign(SpeechBubbleMain, {
  MainText: MainText,
  SubText: SubText,
  Icon: Icon,
})

export default SpeechBubble
