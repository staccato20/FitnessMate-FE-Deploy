import styled from "styled-components"
import theme from "./../../styles/theme"

export const SignupWrapper = styled.div`
	height: calc(100vh - 150px);
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
`

export const SignupTitle = styled.span`
	text-align: ${({flex}) => (flex ? "center" : "left")};
	display: ${({flex}) => (flex ? "flex" : "")};
	flex-direction: ${({flex}) => (flex ? "column" : "")};
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
