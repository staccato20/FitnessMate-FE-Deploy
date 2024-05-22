import * as S from "../StyledSignupInput"
const SignupInputLabel = ({children, isRequired}) => {
	return (
		<>
			<S.InputNameWrapper>
				{children}
				{isRequired && <S.EseentialSymbol>*</S.EseentialSymbol>}
			</S.InputNameWrapper>
		</>
	)
}

export default SignupInputLabel
