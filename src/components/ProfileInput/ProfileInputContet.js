import { useEffect, useState } from "react";
import { ProfileInputContentWrapper } from "./StyledProfileInput";
import { nextButtonValidate, validationState } from "../../recoil/atom";
import { useRecoilState } from "recoil";

const ProfileInputContent = ({ placeholder, name }) => {
  // 나중에 utils로 빼기
  const usernameExp = /^[가-힣]{3,10}$/;
  const passwordExp = /^[a-zA-Z0-9]{8,}$/;
  const birthdateExp = /^\d{4}-\d{2}-\d{2}$/;
  const defaultExp = /^[a-zA-Z0-9]{1,}$/;
  const emailExp = /^[a-zA-Z0-9]{30,}$/;

  const [isClicked, setIsClicked] = useState(false);
  const [isValidateChecked, setIsValidateChecked] =
    useRecoilState(validationState);

  const [isNextButton, setIsNextButton] = useRecoilState(nextButtonValidate);
  // 비밀번호 재 확인
  const passwordCheck = () => {
    return (
      isValidateChecked.password[0] !== "" &&
      isValidateChecked.password2[0] !== "" &&
      isValidateChecked.password[0] === isValidateChecked.password2[0]
    );
  };

  console.log("gg");
  // 유효성 검사
  const handleChange = (e) => {
    const value = e.currentTarget.value;
    const name = e.target.name;
    let exp;
    switch (name) {
      case "username":
        exp = usernameExp;
        break;

      case "birthdate":
        exp = birthdateExp;
        break;

      case "password":
        exp = passwordExp;
        break;

      // 이메일은 프론트가 아닌 백에서 검사(중복 + 유효성검사)
      case "email":
        exp = emailExp;
        break;

      case "password2":
        exp = passwordExp;
        break;

      default:
        exp = defaultExp;
    }

    // 유효성 검사
    const updatedValidationState = {
      ...isValidateChecked,
      [name]: [value, exp.test(value), isValidateChecked[name][2]],
    };

    console.log(isValidateChecked.email);

    setIsValidateChecked(updatedValidationState);

    // 패스워드가 바뀔때만 검사
    if (name.includes("password")) {
      if (
        updatedValidationState.password[0] ===
        updatedValidationState.password2[0]
      ) {
        setIsValidateChecked((pre) => ({
          ...pre,
          password2: [value, true, updatedValidationState[name][2]],
        }));
      } else {
        setIsValidateChecked((pre) => ({
          ...pre,
          password2: [value, false, updatedValidationState[name][2]],
        }));
      }
    }
  };

  // input 태그
  return (
    <ProfileInputContentWrapper
      isValidateChecked={isValidateChecked[name]}
      isNextButton={isNextButton}
      name={name}
      placeholder={isClicked === true ? "" : placeholder}
      onFocus={() => {
        setIsClicked(true);
      }}
      onBlur={() => {
        setIsClicked(false);
      }}
      onChange={handleChange}
    />
  );
};

export default ProfileInputContent;
