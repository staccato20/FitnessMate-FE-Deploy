import {useLocation} from "react-router-dom"
import {
	SignupBodyFigure,
	SignupBodyFigureDirect,
	SignupBodyInfo,
	SignupProfile,
	SignupComplete,
} from "./"

const Signup = () => {
	const location = useLocation()
	return (
		<>
			{location.pathname === "/signup" && <SignupProfile />}
			{location.pathname.includes("bodyinfo") && <SignupBodyInfo />}
			{location.pathname === "/signup/bodyfigure" && <SignupBodyFigure />}
			{location.pathname.includes("bodyfigure/direct") && (
				<SignupBodyFigureDirect />
			)}
			{location.pathname.includes("complete") && <SignupComplete />}
		</>
	)
}

export default Signup
