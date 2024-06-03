// < 가로길이가 긴 버튼 >

import React from "react"
import * as S from "./StyledButton"
import "./StyledButtons.css"

function BigButton({backcolor, fontcolor, children, onClick}) {
	return (
		<S.BigButtonWrapper
			backcolor={backcolor}
			fontcolor={fontcolor}
			className="Button"
			onClick={onClick}>
			{children}
		</S.BigButtonWrapper>
	)
}

export default BigButton
