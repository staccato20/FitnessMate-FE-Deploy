// < 가로 길이가 중간인 버튼 스타일 >

import styled from 'styled-components';

export const MiddleButton = styled.div`
	display: flex;
	width: 294px;
	height: 62px;
	padding: 22px 24px;
	justify-content: center;
	align-items: center;
	gap: 3px;
	border-radius: 12px;
	font-family: Pretendard;
	font-size: 22px;
	font-weight: 600;
	cursor: pointer;

	background: ${({ theme }) => theme.Brand};
	color: ${({ theme }) => theme.White};

	&:hover {
    opacity: 0.5;
  }
`;