import * as S from "../StyledSignupInput.js"
const SignupInputInput = ({placeholder, registerOptions}) => {
	return (
		<S.InputWrapper
			placeholder={placeholder}
			{...registerOptions}
		/>
	)
}

export default SignupInputInput
