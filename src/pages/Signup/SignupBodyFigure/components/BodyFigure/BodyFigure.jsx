import * as S from "./StyledBodyFigure"
import {CATEGORY_LIST} from "../../constants/CATEGORY_LIST"
import BodyFigureOptionMenuItem from "./BodyFigureOptionMenuItem"
import CheckBox from "../../../../../components/CheckBox/CheckBox"
import BodyFigureOptionDirectItem from "./BodyFigureOptionDirectItem"
const BodyFigure = ({
	selectedMenu,
	handleSelectMenu,
	selectedFigure,
	handleSelectFigure,
}) => {
	return (
		<S.BodyFigureWrapper>
			<S.BodyFigureTitle>어떤 체형이신가요?</S.BodyFigureTitle>
			<S.BodyFigureOptionMenuList>
				<CheckBox
					$isChecked={selectedMenu === 0}
					index={0}
					handleCheckItem={handleSelectMenu}>
					유형으로 선택하기
				</CheckBox>
				{selectedMenu === 0 && (
					<BodyFigureOptionMenuItem
						selectedFigure={selectedFigure}
						handleSelectFigure={handleSelectFigure}>
						{CATEGORY_LIST}
					</BodyFigureOptionMenuItem>
				)}

				<CheckBox
					$isChecked={selectedMenu === 1}
					index={1}
					handleCheckItem={handleSelectMenu}>
					직접 입력하기
				</CheckBox>
				{selectedMenu === 1 && <BodyFigureOptionDirectItem />}
			</S.BodyFigureOptionMenuList>
		</S.BodyFigureWrapper>
	)
}

export default BodyFigure
