import styled from "styled-components"
import theme from "../../styles/theme"

const getBorderStyle = ($isError, $isDirty) => {
	// input에 변경이 일어나지 않은 경우
	if (!$isDirty) {
		return ""
	}

	// valid 검사
	return $isError ? `2px solid ${theme.Error}` : `2px solid ${theme.Brand}`
}

export const InputName = styled.label`
	color: ${theme.Black};
	font-size: 18px;
	font-weight: 500;
	display: flex;
	gap: 5px;
`

export const EseentialSymbol = styled.span`
	color: ${theme.Error};
	font-size: 18px;
`

export const InputWarning = styled.span`
	color: ${theme.Error};
	font-size: 16px;
`

export const Input = styled.input`
	&::-webkit-input-placeholder {
		color: ${theme.Gray50};
	}
	border-radius: 10px;
	padding: 14px;
	background: ${theme.Gray10};
	width: 100%;
	color: ${theme.Gray50};
	font-size: 18px;
	border: ${({$isError, $isDirty}) => getBorderStyle($isError, $isDirty)};
`

export const CheckBoxGroup = styled.div`
	display: flex;
	gap: 24px;
`
