import { useState } from "react";
import { ProfileInput } from "../../../components";
import { ProfileContainer, SignupContainer } from "../StyledSignup";
import { useNavigate } from "react-router-dom";

// 회원가입 페이지에 대한 정보를 모두 담는 컴포넌트

const SignupProfile = () => {
  const navigate = useNavigate();
  const currenturl = window.location.pathname;

  // 이메일 중복 확인
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  return (
    <SignupContainer action="/submit" method="post">
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
        <ProfileInput
          isChecked={true}
          isEmailChecked={isEmailChecked}
          setIsEmailChecked={setIsEmailChecked}
          placeholder="이메일을 입력해주세요"
        >
          이메일
        </ProfileInput>
        <ProfileInput isChecked={true} placeholder="비밀번호를 입력해주세요">
          비밀번호
        </ProfileInput>
      </ProfileContainer>
      <button
        onClick={() => {
          navigate(`${currenturl}/bodyinfo`);
        }}
      >
        다음으로
      </button>
    </SignupContainer>
  );
};

export default SignupProfile;
