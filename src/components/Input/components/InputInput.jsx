import * as S from "../StyledInput.js"
const InputInput = ({props}) => {
	const {isDirty, isError, ...rest} = props
	return (
		<S.Input
			$isDirty={isDirty}
			$isError={isError}
			{...rest}
		/>
	)
}

export default InputInput
