import {useController, useFormContext} from "react-hook-form"
import * as S from "../StyledSignupInput.js"
const SignupInputInput = ({placeholder, registerOptions}) => {
	const {control} = useFormContext()

	const {
		field,
		fieldState: {isDirty, error},
	} = useController({
		control,
		...registerOptions,
	})
	return (
		<S.Input
			$isDirty={isDirty}
			$isError={error}
			placeholder={placeholder}
			{...field}
		/>
	)
}

export default SignupInputInput
