import styled from "styled-components";
export const ProfileInputContainer = styled.div`
  width: 433px;
  height: 116px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  // 비밀번호와 이메일 사이의 18px - gap(4px) = 14px
  margin-top: ${({ content }) => (content === "비밀번호" ? "14px" : "0")};
  

  // 경고 문구
  .profileInputWarning {
    color: #eb444c;
    font-size: 16px;
  }
  .profileInputChecking {
    color: #0b98ff;
    font-size: 16px;
    font-weight: 500;
  }
  .duplicateButton {
    position: absolute;
    color: #0b98ff;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.34px;
    margin: 0;
    padding: 0;
    top: 47px;
    right: 14px;
  }
`;

export const InputName = styled.span`
color: #000;
font-size: 20px;
    .essentialSymbol {
      color: #eb444c;
      font-size: 18px;
    }
`;

export const ProfileInputContentWrapper = styled.input`
  border: ${({ isChecked, isEmailChecked }) =>
    isChecked
      ? isEmailChecked
        ? "1.5px solid #0b98ff"
        : "none"
      : "1.5px solid #eb444c"};
  &::-webkit-input-placeholder {
    color: #9a9798;
  }
  border-radius: 10px;
  padding: 14px;
  background: #f5f6f7;
  width: 100%;
  color: #9a9798;
  font-size: 18px;
`;
