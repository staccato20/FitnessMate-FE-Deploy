// < 가로길이가 긴 버튼 >

import React from "react";
import * as S from "./StyledBigButton";


// buttonbackground, buttontextcolor : 버튼 배경 색상과 폰트 색상

// buttontext : 버튼에 담긴 내용이 다양하여 가변적으로 채울 수 있도록 구성
// 위 문제와 더불어 back 코드와 함께 다룰 필요가 있는 색 변화 애니메이션은 제작하지 않았음

function BigButton({ backcolor, fontcolor, children }) {
	return (
			<S.BigButton backcolor={backcolor} fontcolor={fontcolor}>{ children }</S.BigButton>
	);
}

export default BigButton;