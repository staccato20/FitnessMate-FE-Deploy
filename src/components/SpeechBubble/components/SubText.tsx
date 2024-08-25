import { ReactNode } from "react"

import * as S from "../StyledSpeechBubble"

interface SubTextProps {
  children: ReactNode
}

const SubText = ({ children }: SubTextProps) => {
  return <S.SpeechBubbleSubText>{children}</S.SpeechBubbleSubText>
}

export default SubText
