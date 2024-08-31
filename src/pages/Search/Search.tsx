import { Route, Routes } from "react-router-dom"

import SearchHome from "@pages/Search/SearchHome/SearchHome"
import SearchWorkoutDetail from "@pages/Search/SearchWorkoutDetail/SearchWorkoutDetail"

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
    </Routes>
  )
}

export default Search
