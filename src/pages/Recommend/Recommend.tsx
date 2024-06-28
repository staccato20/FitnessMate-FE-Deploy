import {Route, Routes} from "react-router-dom"
import RecommendHome from "./RecommendHome/RecommendHome"
import RecommendCategory from "./RecommendCategory/RecommendCategory"
import RecommendWorkoutPart from "./RecommendWorkout/RecommendWorkoutPart"

import RecommendSupplementBudget from "./RecommendSupplement/RecommendSupplementBudget"
import RecommendSupplementResult from "./RecommendSupplement/RecommendSupplementResult"
import RecommendSupplementPurpose from "./RecommendSupplement/RecommendSupplementPurpose"
import {RecommendMachine} from "./StyledRecommend"
import RecommendMachineResult from "./RecommendWorkout/RecommendMachineResult"

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
