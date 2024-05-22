import * as S from "../StyledSignup"
import {BeforeButton, MiddleButton} from "../../../components"
import {useNavigate} from "react-router-dom"
import StatusBar from "../../../components/StatusBar/StatusBar"
import SignupProfileInput from "./components/SignupProfileInput"

const SignupProfile = () => {
	const navigate = useNavigate()

	// 제출
	const handleNextPage = (e) => {
		e.preventDefault()
		navigate(`bodyinfo`)
	}

	const handleBackPage = (e) => {
		e.preventDefault()
		navigate(-1)
	}

	return (
		<S.SignupContainer>
			<S.SignupTitle>
				<StatusBar status={"1"} />
				회원 정보를 입력해주세요
			</S.SignupTitle>
			<SignupProfileInput />
			<S.ButtonContainer>
				<BeforeButton handleSubmit={handleBackPage} />
				<MiddleButton handleSubmit={handleNextPage}>다음</MiddleButton>
			</S.ButtonContainer>
		</S.SignupContainer>
	)
}

export default SignupProfile
