import * as S from "./StyledCheckBox"
import checkedIcon from "../../assets/images/checkedIcon.png"
import notCheckedIcon from "../../assets/images/notCheckedIcon.png"

const FigureCheckBox = ({children, $isChecked, handleCheckItem, index}) => {
	return (
		<S.FigureCheckBoxWrapper
			$isChecked={$isChecked}
			onClick={() => {
				handleCheckItem(index)
			}}
			type="button">
			<S.CheckBoxImg
				$isChecked={$isChecked}
				src={$isChecked ? checkedIcon : notCheckedIcon}
				alt="옵션 선택 이미지"
			/>
			<S.FigureCheckBoxText $isChecked={$isChecked}>
				{children}
			</S.FigureCheckBoxText>
		</S.FigureCheckBoxWrapper>
	)
}

export default FigureCheckBox
