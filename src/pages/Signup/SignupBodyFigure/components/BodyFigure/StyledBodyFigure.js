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
	display: ${({$isChecked}) => ($isChecked ? "flex" : "none")};
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
