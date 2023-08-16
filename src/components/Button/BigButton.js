// < 가로길이가 긴 버튼 >

import React from "react";
import * as S from "./StyledButton";
import "./StyledButtons.css";

function BigButton({ backcolor, fontcolor, children }) {
	return (
			<S.BigButtonWrapper className="Button" backcolor={backcolor} fontcolor={fontcolor}>{ children }</S.BigButtonWrapper>
	);
}

export default BigButton;