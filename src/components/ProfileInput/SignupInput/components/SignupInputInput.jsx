import {useFormContext} from "react-hook-form"
import * as S from "../StyledSignupInput.js"
const SignupInputInput = ({name, placeholder, registerOptions}) => {
	const {control} = useFormContext()
	return (
		<S.InputWrapper
			placeholder={placeholder}
			{...control.register(name, registerOptions)}
		/>
	)
}

export default SignupInputInput
