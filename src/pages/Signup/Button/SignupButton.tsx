import {useNavigate} from "react-router-dom"

import * as S from "../StyledSignup"

import MiddleButton from "../../../components/Button/MiddleButton"
import BeforeButton from "../../../components/Button/BeforeButton"

const SignupButton = ({children, $isValid}) => {
	const navigate = useNavigate()

	const handleBackPage = (e) => {
		e.preventDefault()
		navigate(-1)
	}

	return (
		<S.ButtonContainer>
			<BeforeButton onClick={handleBackPage} />
			<MiddleButton
				type="submit"
				disabled={!$isValid}
				$isValid={$isValid}>
				{children}
			</MiddleButton>
		</S.ButtonContainer>
	)
}

export default SignupButton
