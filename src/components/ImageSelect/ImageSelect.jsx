import * as S from "./StyledImageImageSelect"
const ImageSelect = ({value, children, register, handleClick, $isChecked}) => {
	return (
		<label>
			<input
				type="radio"
				value={value}
				{...register}
				style={{display: "none"}}
			/>
			<S.SelectItem
				onClick={() => {
					handleClick(value)
				}}
				$isChecked={$isChecked}>
				<S.SelectImg
					src={`/src/assets/images/${value}.png`}
					alt={value}
				/>
				<S.SelectText>{children}</S.SelectText>
			</S.SelectItem>
		</label>
	)
}

export default ImageSelect
