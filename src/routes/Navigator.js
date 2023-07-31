import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import { Home, Admin } from "../pages/index";
import Signup from "../pages/Signup/Signup";
const Navigator = () => {
  return (
    <Routes>
      {/* 메인 레이아웃  */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup/*" element={<Signup />} />
        <Route path="*" element={<div>없는페이지</div>} />
      </Route>
    </Routes>
  );
};

export default Navigator;
