import * as S from "../StyledSignupInput"
const SignupInputLabel = ({children, isRequired}) => {
	return (
		<S.InputName>
			{children}
			{isRequired && <S.EseentialSymbol>*</S.EseentialSymbol>}
		</S.InputName>
	)
}

export default SignupInputLabel
