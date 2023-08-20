import { atom } from "recoil";

export const EmailState = atom({
  key: "EmailState",
  default: false,
});

// 유효성 검사
export const validationState = atom({
  key: "validationState",
  default: {
    // [value, 유효성검사, 빨/파 테두리 구분]
    userName: ["", false, false],
    loginEmail: ["", false, true],
    password: ["", false, false],
    sex: ["", false, false],
    birthDate: ["", false, false],
    height: ["", false, false],
    weight: ["", false, false],
    password2: ["", false, false],
    upperBodyFat: ["", false, false],
    lowerBodyFat: ["", false, false],
    upperMuscleMass: ["", false, false],
    lowerMuscleMass: ["", false, false],
  },
});

export const bodyPartState = atom({
  key: "bodyPartState",
  default: {
    bodyPartKoreanName: [],
  },
});
