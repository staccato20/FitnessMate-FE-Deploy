// < 가로길이가 중간인 버튼 >

import React from "react";
import * as S from "./StyledBeforeButton";

function BeforeButton({backcolor}) {
	return (
			<S.BeforeButton backcolor={backcolor}>이전</S.BeforeButton>
	);
}

export default BeforeButton;