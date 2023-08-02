// < 가로 길이가 중간인 버튼 스타일 >

import styled from 'styled-components';

export const BeforeButton = styled.div`
	display: flex;
	width: 139px;
	height: 62px;
	padding: 22px 10px;
	justify-content: center;
	align-items: center;
	gap: 3px;
	border-radius: 12px;
	font-family: Pretendard;
	font-size: 22px;
	font-weight: 700;
	cursor: pointer;

	background: ${(props) => props.backcolor || props.theme.Gray10};
	color: ${({ theme }) => theme.Brand};

	&:hover {
		opacity: 0.5;
  }
`;