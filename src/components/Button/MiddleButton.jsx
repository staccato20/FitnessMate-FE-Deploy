// < 가로길이가 중간인 버튼 >

import React from "react"
import * as S from "./StyledButton"
import "./StyledButtons.css"

function MiddleButton({children, onClick, isReady}) {
	return (
		<S.MiddleButtonWrapper
			className="Button"
			onClick={onClick}
			isReady={isReady}>
			{children}
		</S.MiddleButtonWrapper>
	)
}

export default MiddleButton
