import { Route, Routes } from "react-router-dom";
import {
  RecommendHome,
  RecommendCategory,
  RecommendWorkout,
  RecommendMachine,
  RecommendMachineResult,
} from "./index";

const Recommend = () => {
  return (
    <Routes>
      <Route path="/" element={<RecommendHome />} />
      <Route path="category" element={<RecommendCategory />} />
      <Route path="workout" element={<RecommendWorkout />} />
      <Route path="machine" element={<RecommendMachine />} />
      <Route path="machineresult" element={<RecommendMachineResult />} />
    </Routes>
  );
};

export default Recommend;
