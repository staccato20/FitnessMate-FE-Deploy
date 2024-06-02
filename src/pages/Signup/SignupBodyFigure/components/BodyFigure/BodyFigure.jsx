import * as S from "./StyledBodyFigure"
import MiddleTextCheckbox from "../../../../../components/TextCheckbox/MiddleTextCheckbox"
import {CATEGORY_LIST} from "../../constants/CATEGORY_LIST"
const BodyFigure = () => {
	const handleClick = (idx) => {
		const newArr = Array(CATEGORY_LIST.length).fill(false)
		newArr[idx] = true
	}
	return (
		<S.BodyFigureWrapper>
			<S.BodyFigureTitle>어떤 체형이신가요?</S.BodyFigureTitle>
			<S.BodyFigureOptionList>
				{/* {CATEGORY_LIST?.map((item, index) => (
					<MiddleTextCheckbox
						key={index}
						handleClick={handleClick}
						$isSelected
						elementidx={index}>
						{item[0]}
					</MiddleTextCheckbox>
				))} */}
			</S.BodyFigureOptionList>
		</S.BodyFigureWrapper>
	)
}

export default BodyFigure
