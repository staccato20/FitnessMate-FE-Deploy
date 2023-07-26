// < 가로 길이가 긴 버튼 스타일 >

import styled from 'styled-components';

// 만들어진 레이아웃 특정 란에 넣으면
// 거기에 맞게 채워지도록 가로세로 100%로 설정
// 세부내용도 그에 맞게 줄어들거나 늘어나도록 %와 em으로 설정
export const StyledBigButton = styled.div`
	display: flex;
	width: 100%;
	height: auto;
	padding: 0% 5%;
	justify-content: center;
	align-items: center;
	border-radius: 2.5% / 21%;

	div {
		font-family: Pretendard;
		font-size: 22px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: -0.44px;
	}
`;