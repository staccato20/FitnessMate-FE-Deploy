import { useState } from "react";
import {
  BodyInfoContainer,
  GenderItem,
  GenderName,
  SignupContainer,
} from "./../StyledSignup";
import { ProfileInput } from "../../../components";
import { InputName } from "../../../components/ProfileInput/StyledProfileInput";
import female from "../../../assets/images/female.png";
import male from "../../../assets/images/male.png";
import { useNavigate } from "react-router-dom";

const SignupBodyInfo = () => {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState([false, false]);
  return (
    <SignupContainer action="/submit" method="post">
      <span className="signupTitle">
        간단한
        <br />
        <span className="titleEmphasis">신체 정보</span>를 입력해주세요
      </span>
      <BodyInfoContainer>
        <div className="genderSelect">
          <InputName>
            성별
            <span className="essentialSymbol"> *</span>
          </InputName>
          <ul className="genderList">
            <GenderItem
              onClick={(e) => {
                e.preventDefault();
                setIsSelected([1, 0]);
              }}
              isSelected={isSelected[0]}
            >
              <img className="genderImg" src={male} alt="성별 이미지(남성)" />
              <GenderName isSelected={isSelected[0]}>남성</GenderName>
            </GenderItem>
            <GenderItem
              onClick={(e) => {
                e.preventDefault();
                setIsSelected([0, 1]);
              }}
              isSelected={isSelected[1]}
            >
              <img className="genderImg" src={female} alt="성별 이미지(여성)" />
              <GenderName isSelected={isSelected[1]}>여성</GenderName>
            </GenderItem>
          </ul>
        </div>
        <ProfileInput
          isChecked={true}
          placeholder="키를 입력해주세요 (숫자만) ex)175"
        >
          키
        </ProfileInput>
        <ProfileInput isChecked={true} placeholder="몸무게를 입력해주세요">
          몸무게
        </ProfileInput>
      </BodyInfoContainer>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        이전
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/signup/bodyfigure", { replace: false }); // 절대 경로로 이동
        }}
      >
        다음
      </button>
    </SignupContainer>
  );
};

export default SignupBodyInfo;
