import {styled} from "styled-components"
import theme from "../../../../../styles/theme"

const RatioButton = styled.button`
	border-radius: 34px;
	background: ${theme.Neutral800};
	display: flex;
	width: 28px;
	height: 28px;
	padding: 10px;
	justify-content: center;
	align-items: center;
`
export const RatioWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 46px;
`
export const RatioBoxWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`
export const RatioTitle = styled.span`
	color: ${theme.Black};
	font-size: 18px;
`
export const RatioBox = styled.div`
	display: flex;
	gap: 20px;
	align-items: flex-end;
`
export const RatioBoxTitle = styled.span`
	color: ${theme.Neutral800};
	font-size: 15px;
	font-weight: 600;
`

export const RatioContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const RatioPercentBox = styled.div`
	width: 100%;
	border-radius: 8px;
	padding: 12px;
	border: 1px solid ${theme.Gray20};
	background: ${theme.Neutral100};
`
export const RatioButtonBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`
export const RatioPercent = styled.span`
	color: ${theme.Black};
	font-size: 30px;
`
export const RatioPlusButton = styled(RatioButton)`
	background: ${theme.Neutral800};
`
export const RatioMinusButton = styled(RatioButton)`
	border: 1px solid ${theme.Neutral300};
	background: ${theme.Gray20};
`
export const RatioMessage = styled.span`
	color: ${theme.Neutral900};
	font-size: 15px;
	text-align: center;
`
export const RatioPlusButtonImg = styled.img``
export const RatioMinusButtonImg = styled.img``
