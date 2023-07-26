import styled from "styled-components";
export const ButtonContainer = styled.button`
  border-radius: 12px;
  background: #fff;
  padding: 10px 14px;
  &:hover {
    border-radius: 12px;
    background: #f5f6f7;
    span {
      color: #0a89e5;
    }
  }
  span {
    color: #2f3233;
    font-family: "Pretendard";
    font-size: 15px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.3px;
  }
`;
