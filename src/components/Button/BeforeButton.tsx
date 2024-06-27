// < 이전 버튼 >

import React from "react"
import * as S from "./StyledButton"

function BeforeButton({onClick}) {
	return <S.BeforeButtonWrapper onClick={onClick}>이전</S.BeforeButtonWrapper>
}

export default BeforeButton
