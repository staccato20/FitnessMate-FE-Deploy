import {useController, useFormContext} from "react-hook-form"
import * as S from "./StyledImageCheckBox"
const ImageCheckBox = ({name, src, children}) => {
	const {control, setValue, watch} = useFormContext()
	const {field} = useController({
		name,
		control,
	})

	const watchSex = watch("sex", "male")

	const toggleSex = (e) => {
		e.preventDefault()
		setValue("sex", watchSex === "male" ? "female" : "male")
	}
	return (
		<>
			<input
				type="checkbox"
				{...field}
				style={{display: "none"}}
			/>
			<S.SexItem
				$isChecked={name === watchSex}
				onClick={toggleSex}>
				<S.SexImg
					src={src}
					alt={name}
				/>
				<S.SexName $isChecked={name === watchSex}>{children}</S.SexName>
			</S.SexItem>
		</>
	)
}

export default ImageCheckBox
