import styled from "styled-components"
import theme from "../../../styles/theme"

export const InputNameWrapper = styled.div`
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
	border: 1.5px solid ${theme.Gray20};
	border-radius: 10px;
	padding: 14px;
	background: ${theme.Gray10};
	width: 100%;
	color: ${theme.Gray50};
	font-size: 18px;
	border: ${({isFocused, name, valueHistory, isValidState}) =>
		!isFocused && valueHistory
			? isValidState[name][1]
				? `1.5px solid ${theme.Gray20}`
					? name === "loginEmail"
						? isValidState.emailModal[1]
							? `1.5px solid ${theme.Brand}`
							: `1.5px solid ${theme.Error}`
						: `1.5px solid ${theme.Gray20}`
					: `1.5px solid ${theme.Gray20}`
				: `1.5px solid ${theme.Error}`
			: `1.5px solid ${theme.Gray20}`};
`
