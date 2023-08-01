import { useState } from "react";
import { ProfileInput } from "../../../components";
import { useNavigate } from "react-router-dom";
import * as S from "../StyledSignup";

// 회원가입 페이지에 대한 정보를 모두 담는 컴포넌트

const SignupProfile = () => {
  const navigate = useNavigate();
  const currenturl = window.location.pathname;

  // 이메일 중복 확인
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  return (
    <S.SignupContainer action="/submit" method="post">
      <S.SignupTitle>
        <S.TitleEmphasis>회원정보</S.TitleEmphasis>를 입력해주세요.
      </S.SignupTitle>
      <S.ProfileContainer>
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
      </S.ProfileContainer>
      <button
        onClick={() => {
          navigate(`${currenturl}/bodyinfo`);
        }}
      >
        다음으로
      </button>
    </S.SignupContainer>
  );
};

export default SignupProfile;
