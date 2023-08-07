import { atom } from "recoil";
// 회원가입 input 정보 / 유효성검사 / 중복체크

// 다음버튼
export const nextButtonValidate = atom({
  key: "nextButtonValidate",
  default: false,
});

// 유효성 검사
export const validationState = atom({
  key: "validationState",
  default: {
    // [value, 유효성검사, 파란색 테두리]
    username: ["", false, false],
    email: ["", false, true],
    password: ["", false, false],
    password2: ["", false, false],
    birthdate: ["", false, false],
    height: ["", false, false],
    weight: ["", false, false],
    // 기타 필드
  },
});

// 회원정보 state(필요없을수도)
export const profileState = atom({
  key: "profileState",
  default: {
    username: "",
    email: "",
    password: "",
    password2: "",
    birthdate: "",
    height: "",
    weight: "",
  },
});
