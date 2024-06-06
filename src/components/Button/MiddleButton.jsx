// < 가로길이가 중간인 버튼 >

import React from "react"
import * as S from "./StyledButton"

function MiddleButton({children, onClick, $isValid}) {
	return (
		<S.MiddleButtonWrapper
			onClick={onClick}
			$isValid={$isValid}>
			{children}
		</S.MiddleButtonWrapper>
	)
}

export default MiddleButton
