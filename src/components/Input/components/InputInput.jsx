import * as S from "../StyledInput.js"
const InputInput = ({type, props}) => {
	return (
		<S.Input
			type={type}
			{...props}
		/>
	)
}

export default InputInput
