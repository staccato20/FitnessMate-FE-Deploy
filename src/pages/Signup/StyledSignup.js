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
