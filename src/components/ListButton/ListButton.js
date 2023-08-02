// < 가로길이가 중간인 버튼 >

import React from "react";
import * as S from "./StyledListButton";

function ListButton({ children }) {
	return (
			<S.ListButton>{ children }</S.ListButton>
	);
}

export default ListButton;