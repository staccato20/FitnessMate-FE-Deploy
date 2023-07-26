// < 이미지가 포함된 체크박스 스타일 >

import styled from 'styled-components';

// 만들어진 레이아웃 특정 란에 넣으면
// 거기에 맞게 채워지도록 가로세로 100%로 설정
// 세부내용도 그에 맞게 줄어들거나 늘어나도록 %와 em으로 설정
export const StyledImgCheckbox = styled.div`
	width: 100%;
	height: 100%;
	padding: 4%;
	background: #F5F6F7;
	border-radius: 4%;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 4%; 
	display: inline-flex;
	
	.ImgCheckbox-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		align-self: stretch;
	}
	
	.recommend-article {
		color: #2F3233;
		font-size: 2.6em;
		font-style: normal;
		font-family: Pretendard;
		font-weight: 600;
		line-height: 150%;
	}

	.recommend-text {
		color: #707070;
		font-size: 2.6em;
		font-style: normal;
		font-family: Pretendard;
		font-weight: 600;
		line-height: 150%;
	}

	.check-background {
		fill: #F5F6F7;
	}

	.check-shape {
		fill: #555555;
	}

	.ImgCheckbox-bottom {
		width: 100%;
		height: 100%;
		display: flex;
		padding: 3% 9%;
		justify-content: flex-end;
		align-items: center;
		align-self: stretch;
	}

	.article-image {
		width: 100%;
		height: 100%;
		border-radius: 2%;
	}

`;