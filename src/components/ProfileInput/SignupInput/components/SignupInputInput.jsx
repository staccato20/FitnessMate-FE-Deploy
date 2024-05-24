import {useFormContext} from "react-hook-form"
import * as S from "../StyledSignupInput.js"
const SignupInputInput = ({name, placeholder, registerOptions}) => {
	const {register} = useFormContext()
	return (
		<S.Input
			placeholder={placeholder}
			{...register(name, registerOptions)}
		/>
	)
}

export default SignupInputInput
