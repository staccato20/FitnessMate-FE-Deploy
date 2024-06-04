import * as S from "../StyledInput"
const InputLabel = ({children, isRequired}) => {
	return (
		<S.InputName>
			{children}
			{isRequired && <S.EseentialSymbol>*</S.EseentialSymbol>}
		</S.InputName>
	)
}

export default InputLabel
