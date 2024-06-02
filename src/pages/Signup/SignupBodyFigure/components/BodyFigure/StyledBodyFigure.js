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
	letter-spacing: -0.4px;
`

export const BodyFigureOptionList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;
`
