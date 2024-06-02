import styled from "styled-components"
import theme from "../../../../../styles/theme"

export const BodyFigureWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;
	width: 100%;
`

export const BodyFigureTitle = styled.span`
	padding-bottom: 10px;
	color: ${theme.Gray80};
	font-size: 20px;
	font-weight: 600;
`

export const BodyFigureOptionList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;
	margin-left: 10px;
	width: 100%;
	padding: 10px;
`

export const BodyFigureOptionMenuList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const BodyFigureOptionDirectItemWrapper = styled.div`
	padding-top: 64px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 64px;
	align-items: center;
`

export const BodyFigureOptionDirectItemList = styled.div`
	display: flex;
	justify-content: center;
	gap: 52px;
	align-items: center;
`

export const BodyFigureOptionDirectItemOption = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`

export const BodyFigureOptionDirectItemOptionTitle = styled.span`
	color: var(--Neutral-800, #4e5968);
	font-size: 15px;
`

export const BodyFigureOptionDirectItemOptionBox = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`

export const BodyFigureOptionDirectItemOptionUnit = styled.span`
	color: var(--Neutral-900, #333d4b);
	font-size: 15px;
	font-weight: 400;
`

export const BodyFigureOptionDirectItemOptionInput = styled.input`
	padding: 15px;
	width: 69px;
	height: 48px;
	border-radius: 10px;
	border: 1px solid var(--Neutral-500, #a2b2c2);
	color: var(--Neutral-500, #a2b2c2);
	font-size: 15px;
	font-weight: 400;
`

export const BodyFigureOptioneDirectItemMessage = styled.div`
	color: var(--Neutral-800, #4e5968);
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	border-radius: 12px;
	background: var(--Neutral-200, #f2f4f6);
	padding: 25px;
`

export const BodyFigureOptioneDirectItemInnerMessage = styled.span`
	color: var(--Neutral-950, #272e38);
	font-size: 16px;
`

export const BodyFigureOptioneDirectItemInnerMessage2 = styled.span`
	color: var(--Neutral-800, #4e5968);
	font-size: 15px;
`
