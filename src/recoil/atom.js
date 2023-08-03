import { atom } from "recoil";
// 회원가입 input 정보 / 유효성검사 / 중복체크

// 이름
export const usernameState = atom({
  key: "username",
  default: "",
});

export const isUserNameValidState = atom({
  key: "isUserNameValidState",
  default: false,
});
//

// 생년월일
export const birthdateState = atom({
  key: "birthdate",
  default: "",
});

export const isBirthDateValidState = atom({
  key: "isBirthDateValidState",
  default: false,
});
//

// 이메일
export const emailState = atom({
  key: "email",
  default: "",
});

export const isEmailValidState = atom({
  key: "isEmailValidState",
  default: false,
});

export const isEmailDuplicateState = atom({
  key: "isEmailDuplicateState",
  default: false,
});
//

// 비밀번호
export const passwordState = atom({
  key: "password",
  default: "",
});

export const isPasswordValidState = atom({
  key: "isPasswordValidState",
  default: false,
});
//
