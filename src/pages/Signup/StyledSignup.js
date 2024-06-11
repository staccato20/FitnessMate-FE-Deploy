import styled from "styled-components"
import theme from "./../../styles/theme"

export const SignupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 474px;
	padding-bottom: 30px;
`
export const SignupForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 52px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

export const SignupContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const SignupTitle = styled.span`
	align-items: center;
	width: 100%;
	color: ${theme.Gray80};
	font-size: 30px;
	font-weight: 600;
	letter-spacing: -0.6px;
`

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
`
