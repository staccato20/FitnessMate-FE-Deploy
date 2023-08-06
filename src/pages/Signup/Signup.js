import ProfileInput from "./../../components/ProfileInput/ProfileInput";
import { ProfileContainer, SignupContainer } from "./StyledSignup";

const Signup = () => {
  return (
    <SignupContainer>
      <span className="signupTitle">
        <span className="titleEmphasis">회원정보</span>를 입력해주세요
      </span>
      <ProfileContainer>
        <ProfileInput isChecked={true} placeholder="이름을 입력해주세요">
          이름
        </ProfileInput>
        <ProfileInput
          isChecked={true}
          placeholder="생년월일 8자리를 입력해주세요 ex)000315"
        >
          생년월일
        </ProfileInput>
        <ProfileInput isChecked={true} placeholder="이메일을 입력해주세요">
          이메일
        </ProfileInput>
        <ProfileInput isChecked={true} placeholder="비밀번호를 입력해주세요">
          비밀번호
        </ProfileInput>
      </ProfileContainer>
    </SignupContainer>
  );
};

export default Signup;
