import {Route, Routes} from "react-router-dom"
import FixPassword from "./Fix/FixPassword"
import FixProfile from "./Fix/FixProfile"
import FixBodyInfo from "./Fix/FixBodyInfo"

const Mypage = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<MypageHome />}
			/>
			<Route
				path="fixprofile"
				element={<FixProfile />}
			/>
			<Route
				path="fixpassword"
				element={<FixPassword />}
			/>
			<Route
				path="fixbodyinfo"
				element={<FixBodyInfo />}
			/>
		</Routes>
	)
}

export default Mypage
