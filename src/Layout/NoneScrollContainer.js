// < 스크롤 없는 레이아웃 >

import React from "react";
import * as S from "./StyledLayoutContainer";

export const NoneScrollContainerWrapper = ({children}) => {
	return (
		<S.NoneScrollContainer>{children}</S.NoneScrollContainer>
	);
}

export default NoneScrollContainerWrapper;