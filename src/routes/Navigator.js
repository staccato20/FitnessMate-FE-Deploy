import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import { Home, Admin, Signup } from "../pages/index";
const Navigator = () => {
  return (
    <Routes>
      {/* 메인 레이아웃  */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<div>없는페이지</div>} />

        {/* 회원 가입 페이지, 기본 페이지는 프로필 입력 */}
        <Route path="/signup" element={<Signup />} />
        <Route path="signup/bodyinfo" element={<div>신체 정보</div>} />
        <Route path="signup/bodyfigure" element={<div>체형</div>} />
        <Route
          path="signup/bodyfiguredirect"
          element={<div>체형 직접입력</div>}
        />
        <Route path="signup/complete" element={<div>축하</div>} />
      </Route>
    </Routes>
  );
};

export default Navigator;
