import { Route, Routes } from "react-router-dom";
import SignupProfile from "./SignupProfile/SignupProfile";

// 회원가입 페이지에 대한 정보를 모두 담는 컴포넌트

const Signup = () => {
  return (
    <Routes>
      <Route path="/" element={<SignupProfile />} />
      <Route path="profile" element={<div>회원 정보</div>} />
      <Route path="bodyinfo" element={<div>신체 정보</div>} />
      <Route path="bodyfigure" element={<div>체형</div>} />
      <Route path="bodyfigure/direct" element={<div>체형 직접입력</div>} />
      <Route path="complete" element={<div>완성</div>} />
    </Routes>
  );
};

export default Signup;
