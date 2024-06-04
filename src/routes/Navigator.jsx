import {RouterProvider, createBrowserRouter} from "react-router-dom"

import Login from "../pages/Login/Login"
import Recommend from "../pages/Recommend/Recommend"
import Mypage from "../pages/MyPage/Mypage"
import MainLayout from "../Layout/Mainlayout"
import Search from "../pages/Search/Search"
import {Home} from "../pages/Home/Home"

import Complete from "../pages/Signup/Complete/Complete"
import BodyInfo from "../pages/Signup/BodyInfo/BodyInfo"
import Profile from "../pages/Signup/Profile/Profile"
import BodyFigure from "../pages/Signup/BodyFigure/BodyFigure"

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
					{path: "profile", element: <Profile />},
					{path: "bodyinfo", element: <BodyInfo />},
					{path: "bodyfigure", element: <BodyFigure />},
					{path: "complete", element: <Complete />},
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
