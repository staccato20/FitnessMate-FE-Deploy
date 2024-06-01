import {RouterProvider, createBrowserRouter} from "react-router-dom"

import Login from "../pages/Login/Login"
import Recommend from "../pages/Recommend/Recommend"
import Mypage from "../pages/MyPage/Mypage"
import MainLayout from "../Layout/Mainlayout"
import Search from "../pages/Search/Search"
import SignupBodyInfo from "../pages/Signup/SignupBodyInfo/SignupBodyInfo"
import SignupProfile from "../pages/Signup/SignupProfile/SignupProfile"
import SignupBodyFigure from "../pages/Signup/SignupBodyFigure/SignupBodyFigure"
import SignupComplete from "../pages/Signup/SignupComplete/SignupComplete"

import {Home} from "../pages/Home/Home"

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				index: true,
				path: "/",
				element: <Home />,
			},
			{
				path: "signup",
				children: [
					{path: "profile", element: <SignupProfile />},
					{path: "bodyinfo", element: <SignupBodyInfo />},
					{path: "bodyfigure", element: <SignupBodyFigure />},
					{path: "complete", element: <SignupComplete />},
				],
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "recommend",
				element: <Recommend />,
			},
			{
				path: "search",
				element: <Search />,
			},
			{
				path: "mypage",
				element: <Mypage />,
			},
		],
	},
])

const Navigator = () => {
	return <RouterProvider router={router} />
}

export default Navigator
