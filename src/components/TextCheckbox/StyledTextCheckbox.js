// < 글만 있는 체크박스 스타일 >

import styled from "styled-components";

// 만들어진 레이아웃 특정 란에 넣으면
// 거기에 맞게 채워지도록 가로 100%로 설정(디자인에 따라 세로는 설정 X)
// 세부내용도 그에 맞게 줄어들거나 늘어나도록 %와 em으로 설정
export const StyledTextCheckbox = styled.button`
  display: flex;
  width: 100%;
  padding: 10px 14px;
  background: #f5f6f7;
  border-radius: 16px;
  flex-direction: column;

  .TextCheckbox-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }

  .choice-article {
    color: #707070;
    font-size: 2.2em;
    font-weight: 600;
  }

  .check-background {
    fill: #f5f6f7;
  }

  .check-shape {
    fill: #555555;
  }
`;
