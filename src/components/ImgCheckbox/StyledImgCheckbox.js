// < 이미지가 포함된 체크박스 스타일 >

import styled from 'styled-components';

// 만들어진 레이아웃 특정 란에 넣으면
// 거기에 맞게 채워지도록 가로세로 100%로 설정
// 세부내용도 그에 맞게 줄어들거나 늘어나도록 %와 em으로 설정
export const ImgCheckbox = styled.button`
  display: flex;
  width: 385px;
	height: 385px;
  padding: 24px;
  background: ${({ theme }) => theme.Gray10};
  border-radius: 16px;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
  border: 2px solid
    ${({ theme, isSelected }) => (isSelected ? theme.Brand : theme.Gray10)};

  &:hover {
    border: 2px solid
      ${({ isSelected, theme }) => (isSelected ? theme.Gray10 : theme.Gray30)};

    .check-shape {
      fill: ${({ isSelected, theme }) =>
        isSelected ? theme.White : theme.Black};
    }

    .choice-article {
      color: ${({ isSelected, theme }) => (isSelected ? "none" : theme.Black)};
    }
  }

  .choice-article {
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.Brand : theme.Gray70};
    font-size: 22px;
    font-weight: 600;
  }

  .check-background {
    fill: ${({ isSelected, theme }) =>
      isSelected ? theme.Brand : theme.Gray10};
  }

  .check-shape {
    fill: ${({ isSelected, theme }) =>
      isSelected ? theme.White : theme.Gray30};
  }

	.ImgCheckbox-top {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.ImgCheckbox-bottom {
		width: 337px;
		height: 287px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.article-image {
		border-radius: 2%;
	}

`;