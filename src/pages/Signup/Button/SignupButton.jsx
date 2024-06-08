import {useNavigate} from "react-router-dom"
import {BeforeButton, MiddleButton} from "../../../components"
import * as S from "../StyledSignup"

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
				$isValid={$isValid}>
				{children}
			</MiddleButton>
		</S.ButtonContainer>
	)
}

export default SignupButton
