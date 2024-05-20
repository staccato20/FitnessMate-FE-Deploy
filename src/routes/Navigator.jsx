import {RouterProvider, createBrowserRouter} from "react-router-dom"
import {Home, Admin} from "../pages"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"
import Recommend from "../pages/Recommend/Recommend"
import Mypage from "../pages/MyPage/Mypage"
import MainLayout from "../Layout/Mainlayout"
import Search from "../pages/Search/Search"
import {SignupBodyInfo, SignupProfile} from "../pages/Signup"
import SignupBodyFigureDirect from "../pages/MyPage/Fix/FixBodyFigureDirect"
import SignupBodyFigure from "../pages/Signup/SignupBodyFigure/SignupBodyFigure"
import SignupComplete from "../pages/Signup/SignupComplete/SignupComplete"

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
				path: "admin",
				element: <Admin />,
			},
			{
				path: "signup",
				element: <Signup />,
				children: [
					{index: true, element: <SignupProfile />},
					{path: "bodyinfo", element: <SignupBodyInfo />},
					{path: "bodyfigure", element: <SignupBodyFigure />},
					{path: "bodyfigure/direct", element: <SignupBodyFigureDirect />},
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
