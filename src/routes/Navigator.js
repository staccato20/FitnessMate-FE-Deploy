import { Route, Routes } from "react-router-dom";
import Admin from "./../pages/Admin/Admin";
import MainLayout from "../Layout/MainLayout";
import { Home } from "../pages/Home/Home";

const Navigator = () => {
  return (
    <Routes>
      {/* 메인 레이아웃  */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default Navigator;
