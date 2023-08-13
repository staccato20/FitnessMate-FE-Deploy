import { Route, Routes } from "react-router-dom";
import { RecommendInfo, RecommendSelectTwo } from "./index";
// 회원가입 페이지에 대한 정보를 모두 담는 컴포넌트

const Recommend = () => {
  return (
    <Routes>
      <Route path="/" element={<RecommendInfo />} />
      <Route path="selecttwo" element={<RecommendSelectTwo />} />
    </Routes>
  );
};

export default Recommend;
