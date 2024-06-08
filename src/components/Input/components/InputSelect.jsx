import ImageSelect from "../../ImageSelect/ImageSelect"
import {SelectList} from "../../ImageSelect/StyledImageImageSelect"

const InputSelect = ({list, methods}) => {
	const {register, getValues, setValue} = methods

	const handleClick = (value) => {
		setValue("sex", value)
	}

	return (
		<SelectList>
			{list.map(([value, text]) => (
				<ImageSelect
					key={value}
					value={value}
					$isChecked={getValues("sex") === value}
					handleClick={handleClick}
					register={register("sex")}>
					{text}
				</ImageSelect>
			))}
		</SelectList>
	)
}

export default InputSelect
