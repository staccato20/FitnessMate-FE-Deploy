// < 네브바 포함 레이아웃 >

import React from "react";
import * as S from "./StyledNavLayout";

function BigButton({ backcolor, fontcolor, children }) {
	return (
			<S.BigButton className="Button" backcolor={backcolor} fontcolor={fontcolor}>{ children }</S.BigButton>
	);
}

export default BigButton;