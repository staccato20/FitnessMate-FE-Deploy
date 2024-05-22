import * as S from "../StyledSignupInput"
const InputName = ({children, isRequired}) => {
	return (
		<S.InputNameWrapper>
			{children}
			{isRequired && <S.EseentialSymbol>*</S.EseentialSymbol>}
		</S.InputNameWrapper>
	)
}

export default InputName
