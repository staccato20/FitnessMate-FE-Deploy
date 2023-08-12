import { styled } from "styled-components";

export const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 92px;
  padding-top: 78px;
  .recommendTitle {
    font-size: 56px;
    font-weight: 700;
    color: ${({ theme }) => theme.Black};
  }

  .emphasisTitle {
    font-size: 56px;
    font-weight: 700;
    color: ${({ theme }) => theme.Gray70};
  }
  .emphasisTitle2 {
    font-size: 56px;
    font-weight: 700;
    color: ${({ theme }) => theme.Brand};
  }
  .goodImg {
    width: 328px;
    height: 232px;
    margin-bottom: 100px;
  }
`;
