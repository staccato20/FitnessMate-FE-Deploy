import { Route, Routes } from "react-router-dom";
import SignupProfile from "./SignupProfile/SignupProfile";
import SignupBodyInfo from "./SignupBodyInfo/SignupBodyInfo";
import SignupBodyFigure from "./SignupBodyFigure/SignupBodyFigure";

// 회원가입 페이지에 대한 정보를 모두 담는 컴포넌트

const Signup = () => {
  return (
    <Routes>
      <Route path="/" element={<SignupProfile />} />
      <Route path="bodyinfo" element={<SignupBodyInfo />} />
      <Route path="bodyfigure" element={<SignupBodyFigure />} />
      <Route path="bodyfigure/direct" element={<div>체형 직접입력</div>} />
      <Route path="complete" element={<div>완성</div>} />
    </Routes>
  );
};

export default Signup;
