import { styled } from "styled-components";
import theme from "./../../styles/theme";

export const RecommendContainer = styled.div`
  max-width: 842px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 80px;
  padding: 78px 25px 0 25px;

  .goodImg {
    width: 328px;
    height: 232px;
    display: inline-block;
    margin: 0 auto;
    margin-bottom: 100px;
  }
`;

export const RecommendHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 48px;
  position: absolute;
  left: 50%;
  top: 50%;
  align-items: center;
  transform: translate(-50%, 50%);
  .recommendBtnWrapper {
    display: flex;
    width: 182px;
    height: 77px;
    padding: 24px 28px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: ${theme.Brand};
    .recommendBtnText {
      color: ${theme.White};
      font-size: 24px;
      letter-spacing: -0.48px;
    }
    .recommendBtnImg {
      width: 29px;
      height: 29px;
    }
  }
`;

export const RecommendTitle = styled.span`
  font-size: ${({ ftsize }) => ftsize};
  color: ${({ ftcolor }) => ftcolor};
  font-weight: ${({ ftweight }) => ftweight};
  letter-spacing: -0.64px;
  .hide {
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;

export const RecommendTitleHide = styled(RecommendTitle)`
  color: ${theme.Gray80};
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.48px;

  @media screen and (max-width: 660px) {
    display: none;
  }
`;

export const RecommendTitleContainer = styled.div``;

export const RecommendButtonContainer = styled.div`
  margin-top: 186px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .readyWarning {
    display: ${({ isover }) => (isover ? "bloack" : "none")};
    color: ${theme.Error};
    font-size: 22px;
    letter-spacing: -0.44px;
  }
`;

export const RecommendImgContainer = styled.div`
  display: flex;
  gap: 40px;
  // 이미지 세로 한 줄로
  @media (max-width: 830px) {
    flex-direction: column;
  }
`;

export const RecommendTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  .allSelectButton {
    width: 87px;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    background: ${theme.BrandLight};
    color: ${theme.Brand};
    font-size: 18px;
    margin-left: auto;
    margin-right: 0;
  }
  .allClearButton {
    color: ${theme.Brand};
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
    text-align: right;
  }
`;

export const TextCheckboxContainer = styled.div`
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  gap: 24px;
`;

export const BorderTextCheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  position: relative;
`;

export const BorderTextCheckboxInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 22px;
`;

export const ButonWrapper = styled.div`
  margin: 0 auto;
`;

export const RecommendMachineResultContainer = styled.div`
  padding-top: 59px;
`;

export const BudgetContainer = styled.div`
  width: 100%;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 24px;
  .warningText {
    color: #eb444c;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.36px;
    display: flex;
    justify-content: center;
  }
`;

export const BudgetBox = styled.div`
  width: 100%;
  max-width: 588px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .budgetWrapper {
    min-width: 317px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border: 3px solid
      ${({ warnBudget }) => (warnBudget ? theme.Error : theme.Gray10)};
    border-radius: 16px;
    background: ${theme.Gray10};
  }
  .budget {
    color: ${({ warnBudget }) => (warnBudget ? theme.Error : theme.Black)};
    font-size: 49px;
    font-weight: 700;
    letter-spacing: -0.98px;
  }
  .plusButton {
    padding: 26px;
  }
  img {
    cursor: pointer;
  }
`;
