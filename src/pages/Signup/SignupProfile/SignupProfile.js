import * as S from "../StyledSignup";
import { useRecoilValue } from "recoil";
import { ProfileInput } from "../../../components";
import { useNavigate } from "react-router-dom";
import { validationState } from "./../../../recoil/atom";
import BigButton from "./../../../components/Button/BigButton";

// 회원가입 페이지에 대한 정보를 모두 담는 컴포넌트
// 우선 이메일은
const SignupProfile = () => {
  const navigate = useNavigate();
  const isValidState = useRecoilValue(validationState);

  // 제출
  const handleSubmit = (e) => {
    e.preventDefault();
    // 모든 유효성 검사 + 이메일 중복 확인을 만족해야 다음으로 버튼 활성화
    if (
      Object.entries(isValidState).filter(([key, value]) => {
        return value[1] === true;
      }).length === 5
    ) {
      navigate(`bodyinfo`);
    }
  };

  return (
    <S.SignupContainer>
      <S.SignupTitle>
        <S.TitleEmphasis>회원정보</S.TitleEmphasis>를 입력해주세요.
      </S.SignupTitle>
      <form onSubmit={handleSubmit}>
        <ProfileInput
          placeholder="이름을 입력해주세요 (3자리 이상 10자리 이하)"
          name="username"
        >
          이름
        </ProfileInput>
        <ProfileInput
          placeholder="생년월일을 입력해주세요 ex) 1998-06-16"
          name="birthdate"
        >
          생년월일
        </ProfileInput>
        <ProfileInput placeholder="이메일을 입력해주세요" name="email">
          이메일
        </ProfileInput>
        <ProfileInput
          placeholder="비밀번호를 입력해주세요 (8자리 이상)"
          name="password"
        >
          비밀번호
        </ProfileInput>
        <button
          className="nextButton"
          type="submit" // 버튼이 두개이므로 타입 명시
        >
          다음으로
        </BigButton>
      </form>
    </S.SignupContainer>
  );
};

export default SignupProfile;
