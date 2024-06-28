import {Route, Routes} from "react-router-dom"
import SearchHome from "./SearchHome/SearchHome"
import SearchWorkoutDetail from "./SearchWorkoutDetail/SearchWorkoutDetail"
import SearchSupplementDetail from "./SearchSupplementDetail/SearchSupplementDetail"

// search 페이지에 대한 정보를 모두 담는 컴포넌트

const Search = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<SearchHome />}
			/>
			<Route
				path="workoutdetail"
				element={<SearchWorkoutDetail />}
			/>
			<Route
				path="supplementDetail"
				element={<SearchSupplementDetail />}
			/>
		</Routes>
	)
}

export default Search
