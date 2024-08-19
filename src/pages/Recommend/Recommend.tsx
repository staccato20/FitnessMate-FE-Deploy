// @ts-nocheck
import { Route, Routes } from "react-router-dom"

import RecommendCategory from "@pages/Recommend/RecommendCategory/RecommendCategory"
import RecommendHome from "@pages/Recommend/RecommendHome/RecommendHome"
import RecommendMachineResult from "@pages/Recommend/RecommendWorkout/RecommendMachineResult"
import RecommendWorkoutPart from "@pages/Recommend/RecommendWorkout/RecommendWorkoutPart"

import { RecommendMachine } from "./StyledRecommend"

const Recommend = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<RecommendHome />}
      />
      <Route
        path="category"
        element={<RecommendCategory />}
      />
      <Route
        path="workout"
        element={<RecommendWorkoutPart />}
      />
      <Route
        path="machine"
        element={<RecommendMachine />}
      />
      <Route
        path="machineresult"
        element={<RecommendMachineResult />}
      />
    </Routes>
  )
}

export default Recommend
