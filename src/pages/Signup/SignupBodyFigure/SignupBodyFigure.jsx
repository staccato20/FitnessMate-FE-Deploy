import * as S from "../StyledSignup"
import {useNavigate} from "react-router-dom"

import MiddleButton from "../../../components/Button/MiddleButton"
import BeforeButton from "../../../components/Button/BeforeButton"
import StatusBar from "../../../components/StatusBar/StatusBar"
import {useSlide} from "./hooks/useSlide"
import BodyFigure from "./components/BodyFigure/BodyFigure"
import Ratio from "./components/Ratio/Ratio"

const SignupBodyFigure = () => {
	const {ratioValue, ratioText, handleRatio} = useSlide()
	const navigate = useNavigate()

	const handleBackPage = (e) => {
		e.preventDefault()
		navigate(-1)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
	}

	return (
		<S.SignupContainer>
			<S.SignupTitle>
				<StatusBar status={"3"} />
				체형 정보를 입력해주세요
			</S.SignupTitle>
			<S.SignupUpdonwBalanceWrapper>
				<Ratio
					ratioValue={ratioValue}
					ratioText={ratioText}
					handleRatio={handleRatio}
				/>
				<BodyFigure />
				<S.ButtonContainer>
					<BeforeButton onClick={handleBackPage} />
					<MiddleButton onClick={handleSubmit}>회원가입 완료</MiddleButton>
				</S.ButtonContainer>
			</S.SignupUpdonwBalanceWrapper>
		</S.SignupContainer>
	)
}

export default SignupBodyFigure
