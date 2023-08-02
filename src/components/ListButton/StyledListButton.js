// < 가로 길이가 중간인 버튼 스타일 >

import styled from 'styled-components';

export const ListButton = styled.div`
	display: inline-flex;
	width: auto;
	height: 44px;
	padding: 10px 24px;
	justify-content: center;
	align-items: center;
	border-radius: 16px;
	gap: 10px;
	font-family: Pretendard;
	font-size: 17px;
	font-weight: 600;
	cursor: pointer;

	background: ${({ theme }) => theme.Gray10};
	color: ${({ theme }) => theme.Black};

	&:hover {
    opacity: 0.5;
  }
`;