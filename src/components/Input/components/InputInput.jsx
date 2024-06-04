import * as S from "../StyledInput.js"
const InputInput = ({props, ...validateStyle}) => {
	return (
		<S.Input
			$isDirty={validateStyle.$isDirty}
			$isError={validateStyle.$isError}
			{...props}
		/>
	)
}

export default InputInput
