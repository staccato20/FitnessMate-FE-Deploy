// < 가로길이가 긴 버튼 >

import React from "react";
import * as S from "./StyledButton";
import "./StyledButtons.css";

function BigButton({ backcolor, fontcolor, children }) {
	return (
			<S.BigButton className="Button" backcolor={backcolor} fontcolor={fontcolor}>{ children }</S.BigButton>
	);
}

export default BigButton;