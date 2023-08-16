// < 이미지가 포함된 체크박스 스타일 >

import styled from 'styled-components';

export const ImgCheckboxWrapper = styled.button`
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