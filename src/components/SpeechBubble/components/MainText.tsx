import { ReactNode } from "react"

import * as S from "../StyledSpeechBubble"

interface MainTextProps {
  children: ReactNode
}

const MainText = ({ children }: MainTextProps) => {
  return <S.SpeechBubbleMainText>{children}</S.SpeechBubbleMainText>
}

export default MainText
