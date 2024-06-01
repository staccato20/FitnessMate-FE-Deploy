import {styled} from "styled-components"

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
	color: var(--Black, #191f28);
	font-size: 18px;
`
export const RatioBox = styled.div`
	display: flex;
	gap: 8px;
	align-items: flex-end;
`
export const RatioBoxTitle = styled.span`
	color: var(--Neutral-800, #4e5968);
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
	width: 88px;
	border-radius: 8px;
	padding: 12px;
	border: 1px solid var(--gray-20, #f2f4f6);
	background: var(--Neutral-100, #f9fafb);
`
export const RatioButtonBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`
export const RatioPercent = styled.span`
	color: var(--Black, #191f28);
	font-size: 30px;
`
export const RatioPlusButton = styled.button`
	border-radius: 34px;
	background: var(--Neutral-800, #4e5968);
	display: flex;
	width: 28px;
	height: 28px;
	padding: 10px;
	justify-content: center;
	align-items: center;
`
export const RatioMinusButton = styled.button`
	border-radius: 34px;
	border: 1px solid var(--Neutral-300, #e4eaf0);
	background: var(--gray-20, #f2f4f6);
	display: flex;
	width: 28px;
	height: 28px;
	padding: 10px;
	justify-content: center;
	align-items: center;
`
export const RatioPlusButtonImg = styled.img``
export const RatioMinusButtonImg = styled.img``
export const RatioMessage = styled.span`
	color: var(--Neutral-900, #333d4b);
	font-size: 15px;
	text-align: center;
`
