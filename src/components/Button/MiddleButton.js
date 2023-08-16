// < 가로길이가 중간인 버튼 >

import React from "react";
import * as S from "./StyledButton";
import "./StyledButtons.css";

function MiddleButton({ children }) {
	return (
			<S.MiddleButtonWrapper className="Button">{ children }</S.MiddleButtonWrapper>
	);
}

export default MiddleButton;