import {
  InputContainer,
  InputContent,
  InputWarning,
} from "./ProfileInputStyledComponents";

const ProfileInput = ({ isChecked, children }) => {
  return (
    <InputContainer>
      <span className="InputName">
        {children}
        <span className="essentialSymbol"> *</span>
      </span>
      <InputContent
        isChecked={isChecked}
        placeholder={`${children}를 입력해주세요.`}
      ></InputContent>
      {!isChecked && (
        <InputWarning>{children} 생성 규칙에 맞지 않습니다.</InputWarning>
      )}
    </InputContainer>
  );
};

export default ProfileInput;
