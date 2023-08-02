// < 가로길이가 중간인 버튼 >

import React from "react";
import * as S from "./StyledMiddleButton";

function MiddleButton({ children }) {
	return (
			<S.MiddleButton>{ children }</S.MiddleButton>
	);
}

export default MiddleButton;