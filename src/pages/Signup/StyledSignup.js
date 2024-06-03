import styled from "styled-components"
import theme from "./../../styles/theme"

export const SignupContainer = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 474px;
	gap: 52px;

	.recommendText {
	}
	.buttonContainer {
	}
	.congratuImg {
		display: inline-block;
		margin: 0 auto;
		padding-top: 60px;
	}

	.profileForm {
		display: flex;
		gap: 12px;
		flex-direction: column;
	}
`

export const SignupTitle = styled.span`
	text-align: ${({flex}) => (flex ? "center" : "left")};
	display: ${({flex}) => (flex ? "flex" : "")};
	flex-direction: ${({flex}) => (flex ? "column" : "")};
	align-items: center;
	width: 100%;
	color: #333d4b;
	font-size: 30px;
	font-weight: 600;
	letter-spacing: -0.6px;
`

export const BodyInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 24px;
	width: 100%;
`

export const ProfileInputcontainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
`

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
`

export const SignupUpdonwBalanceWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 48px;
	.directButtonContainer {
		display: flex;
		justify-content: flex-end;
		.directbutton {
			/* 자식 크기에 width 맞추기 */
			padding: 10px;
			justify-content: center;
			display: flex;
			align-items: center;
			gap: 10px;
			color: ${theme.Brand};
			font-size: 20px;
			font-weight: 600;
			margin-top: -30px;
			.rightArrow {
				width: 24px;
				height: 24px;
			}
		}
	}
`

export const SexSelect = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`
