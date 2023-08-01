import styled from "styled-components";

export const SignupContainer = styled.form`
  display: flex;
  padding: 62px 204px 156px 205px;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  .signupTitle {
    width: 100%;
    text-align: left;
    color: #707070;
    font-size: 28px;
    font-weight: 700;
  }
  .titleEmphasis {
    color: #2f3233;
    font-size: 28px;
    font-weight: 700;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BodyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  .genderSelect {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .genderList {
    display: flex;
    gap: 5px;
  }
`;
export const GenderItem = styled.button`
  border-radius: 16px;
  background: ${({ isSelected }) => (isSelected ? "#F5F6F7" : "#FFF")};
  display: flex;
  width: 126px;
  height: 126px;
  padding: 18px 32px 19px 31px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  .genderImg {
    width: 60px;
    height: 60px;
  }
`;

export const GenderName = styled.span`
  color: ${({ isSelected }) => (isSelected ? "#2f3233" : "#9A9798")};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
`;
