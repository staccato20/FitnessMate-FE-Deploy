import Icon from "@components/Icon/Icon"
import SpeechBubbleIcon from "@components/SpeechBubble/components/Icon"
import MainText from "@components/SpeechBubble/components/MainText"
import SubText from "@components/SpeechBubble/components/SubText"

import { StrictPropsWithChildren } from "@typpes/type"

import * as S from "./StyledSpeechBubble"

const SpeechBubbleMain = ({ children }: StrictPropsWithChildren) => (
  <S.SpeechBubbleWrapper
    $isMultiline={Array.isArray(children)}
    $isIcon={
      Array.isArray(children) && typeof children[0].props.children === "object"
    }>
    <Icon
      icon={"Tooltip"}
      className="tooltip"
    />
    {children}
  </S.SpeechBubbleWrapper>
)

const SpeechBubble = Object.assign(SpeechBubbleMain, {
  MainText: MainText,
  SubText: SubText,
  Icon: SpeechBubbleIcon,
})

export default SpeechBubble
