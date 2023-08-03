import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ProfileInput } from "../../../components";
import { Form, redirect, useNavigate } from "react-router-dom";
import * as S from "../StyledSignup";
import { userIdVerifyAPI, userPostAPI } from "../../../apis/API";
import {
  usernameState,
  birthdateState,
  emailState,
  passwordState,
  isUserNameValidState,
  isBirthDateValidState,
  isEmailValidState,
  isPasswordValidState,
} from "./../../../recoil/atom";
// 회원가입 페이지에 대한 정보를 모두 담는 컴포넌트

const SignupProfile = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useRecoilState(usernameState);
  const [birthDate, setBirthDate] = useRecoilState(birthdateState);
  const [email, setEmail] = useRecoilState(emailState);
  const [passWord, setPassWord] = useRecoilState(passwordState);

  const [userNameValidState, setUserNameValidState] =
    useRecoilState(isUserNameValidState);

  const [birthDateValidState, setBirthDateValidState] = useRecoilState(
    isBirthDateValidState
  );

  const [emailValidState, setEmailValidState] =
    useRecoilState(isEmailValidState);

  const [passwordValidState, setPasswordValidState] =
    useRecoilState(isPasswordValidState);

  // 이메일 중복 확인
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  return (
    // 리액트의 Form 태그(엔터나 버튼누를시 자동 제출)
    <S.SignupContainer>
      <S.SignupTitle>
        <S.TitleEmphasis>회원정보</S.TitleEmphasis>를 입력해주세요.
      </S.SignupTitle>
      <Form action="/signup" method="post">
        <ProfileInput
          isChecked={true}
          placeholder="이름을 입력해주세요"
          name="userName"
        >
          이름
        </ProfileInput>
        <ProfileInput
          isChecked={true}
          placeholder="생년월일 8자리를 입력해주세요 ex)000315"
          name="birthdate"
        >
          생년월일
        </ProfileInput>
        <ProfileInput
          isChecked={true}
          isEmailChecked={isEmailChecked}
          setIsEmailChecked={setIsEmailChecked}
          placeholder="이메일을 입력해주세요"
          name="email"
        >
          이메일
        </ProfileInput>
        <ProfileInput
          isChecked={true}
          placeholder="비밀번호를 입력해주세요"
          name="password"
        >
          비밀번호
        </ProfileInput>
        <button
          className="nextButton"
          type="submit" // 버튼이 두개이므로 타입 명시
        >
          다음으로
        </button>
      </Form>
    </S.SignupContainer>
  );
};

export const signUpAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    userName: data.get("userName") === "" ? "홍길동" : data.get("userName"),
    birthdate: data.get("birthdate") === "" ? "123456" : data.get("birthdate"),
    email: data.get("email") === "" ? "123456" : data.get("email"),
    password: data.get("password") === "" ? "123456" : data.get("password"),
    date: new Date(),
  };
  console.log(submission);
  // 클라이언트에서 유효성 검사 + 서버에서 이메일 중복검사를 하고 마지막 페이지에서 제출 시에 서버에서 다시 유효성 검사
  // 서버로 이메일 중복 검사 요청
  const verifyResponse = await userIdVerifyAPI.post(`/${submission.loginId}`);
  console.log(verifyResponse);

  // 서버로 제출하는 것이 아닌 전역적으로 입력 값 관리
  // const response = await userPostAPI.post("", submission);
  // if (response.data === "ok") {
  //   return redirect("/");
  // } else {
  //   return { error: "Wrong Input" };
  // }
};

export default SignupProfile;

// 제출버튼을 눌러야 모든 입력값에 대해서 클라이언트에서 유효성 검사 후
// 오류가 있는 경우 위에서 부터 하나씩 나타냄
// 완전히 모두 검사가 되기전까진 formData에서 받아오고,
// 모두 통과하면 atom업데이트, 다음페이지로 넘어가기
// 업데이트만 필요하므로 useRecoilSetState를 이용
// 유효성검사, 중복체크같은 state들도 3~4단계 거쳐서 전송되므로 전역으로 관리한다.
