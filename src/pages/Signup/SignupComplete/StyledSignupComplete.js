import styled from "styled-components"
import theme from "../../../styles/theme"

export const SignupCompleteNav = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
	width: 100%;
`
export const SignupCompleteNavTitle = styled.span`
	color: ${theme.Gray80};
	font-size: 22px;
	font-weight: 600;
`

export const SignupCompleteNavList = styled.span`
	display: flex;
	flex-direction: column;
	gap: 18px;
`

export const SignupCompleteNavItem = styled.button`
	display: flex;
	width: 100%;
	padding: 24px;
	justify-content: space-between;
	align-items: center;
	border-radius: 10px;
	background: ${theme.Gray10};
	text-align: left;
`
export const SignupCompleteNavItemTitle = styled.div`
	color: ${theme.Black};
	font-size: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-weight: 600;
`
export const SignupCompleteNavItemText = styled.span`
	color: ${theme.Black};
	font-size: 16px;
`
export const SignupCompleteNavItemImg = styled.img``
