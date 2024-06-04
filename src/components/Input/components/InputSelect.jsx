import * as S from "../StyledInput.js"
import male from "../../../assets/images/male.png"
import female from "../../../assets/images/female.png"
import ImageCheckBox from "../../ImageCheckBox/ImageCheckBox.jsx"
const InputSelect = () => {
	return (
		<S.CheckBoxGroup>
			<ImageCheckBox
				name="male"
				src={male}>
				남성
			</ImageCheckBox>
			<ImageCheckBox
				name="female"
				src={female}>
				여성
			</ImageCheckBox>
		</S.CheckBoxGroup>
	)
}

export default InputSelect
