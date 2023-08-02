// < 가로길이가 중간인 버튼 >

import React from "react";
import * as S from "./StyledSmallButton";

function SmallButton({ children }) {
	return (
			<S.SmallButton>{ children }</S.SmallButton>
	);
}

export default SmallButton;