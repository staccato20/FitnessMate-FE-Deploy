import FigureCheckBox from "../../../../../components/CheckBox/FigureCheckBox"
import * as S from "./StyledBodyFigure"
const BodyFigureOptionMenuItem = ({
	children,
	selectedFigure,
	handleSelectFigure,
}) => {
	return (
		<S.BodyFigureOptionList>
			{children?.map((figure, index) => (
				<FigureCheckBox
					handleCheckItem={handleSelectFigure}
					$isChecked={selectedFigure === index}
					key={figure[0]}
					index={index}>
					{figure[0]}
				</FigureCheckBox>
			))}
		</S.BodyFigureOptionList>
	)
}

export default BodyFigureOptionMenuItem
