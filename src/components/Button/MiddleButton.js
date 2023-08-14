// < 가로길이가 중간인 버튼 >

import React from "react";
import * as S from "./StyledButton";
import "./StyledButtons.css";

function MiddleButtonWrapper({ children }) {
	return (
			<S.MiddleButton className="Button">{ children }</S.MiddleButton>
	);
}

export default MiddleButtonWrapper;