// @ts-nocheck
import { Route, Routes } from "react-router-dom"

import RecommendCategory from "@pages/Recommend/RecommendCategory/RecommendCategory"
import RecommendHome from "@pages/Recommend/RecommendHome/RecommendHome"
import RecommendSupplementBudget from "@pages/Recommend/RecommendSupplement/RecommendSupplementBudget"
import RecommendSupplementPurpose from "@pages/Recommend/RecommendSupplement/RecommendSupplementPurpose"
import RecommendSupplementResult from "@pages/Recommend/RecommendSupplement/RecommendSupplementResult"
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

      <Route
        path="supplementbudget"
        element={<RecommendSupplementBudget />}
      />
      <Route
        path="supplementpurpose"
        element={<RecommendSupplementPurpose />}
      />
      <Route
        path="supplementresult"
        element={<RecommendSupplementResult />}
      />
    </Routes>
  )
}

export default Recommend
