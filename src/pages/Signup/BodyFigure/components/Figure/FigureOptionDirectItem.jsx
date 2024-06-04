import * as S from "./StyledFigure"

import {useFormContext} from "react-hook-form"

const FigureOptionDirectItem = () => {
	const {register} = useFormContext()
	return (
		<S.FigureOptionDirectItemWrapper>
			<S.FigureOptionDirectItemList>
				<S.FigureOptionDirectItemOption>
					<S.FigureOptionDirectItemOptionTitle>
						골격근량
					</S.FigureOptionDirectItemOptionTitle>
					<S.FigureOptionDirectItemOptionBox>
						{/* <S.FigureOptionDirectItemOptionInput
							{...register(REGISTER_OPTIONS.MUSCLE_MASS.name, {
								...REGISTER_OPTIONS.MUSCLE_MASS.rules,
							})}
						/> */}
						<S.FigureOptionDirectItemOptionUnit>
							kg
						</S.FigureOptionDirectItemOptionUnit>
					</S.FigureOptionDirectItemOptionBox>
				</S.FigureOptionDirectItemOption>
				<S.FigureOptionDirectItemOption>
					<S.FigureOptionDirectItemOptionTitle>
						체지방량
					</S.FigureOptionDirectItemOptionTitle>
					<S.FigureOptionDirectItemOptionBox>
						{/* <S.FigureOptionDirectItemOptionInput
							{...register(REGISTER_OPTIONS.BODY_FAT.name, {
								...REGISTER_OPTIONS.BODY_FAT.rules,
							})}
						/> */}
						<S.FigureOptionDirectItemOptionUnit>
							kg
						</S.FigureOptionDirectItemOptionUnit>
					</S.FigureOptionDirectItemOptionBox>
				</S.FigureOptionDirectItemOption>
			</S.FigureOptionDirectItemList>
			<S.FigureOptioneDirectItemMessage>
				<S.FigureOptioneDirectItemInnerMessage>
					어떻게 알 수 있나요?
				</S.FigureOptioneDirectItemInnerMessage>
				<S.FigureOptioneDirectItemInnerMessage2>
					골격근량과 체지방량은 In-body 기계를 통해 측정 가능해요{" "}
				</S.FigureOptioneDirectItemInnerMessage2>
			</S.FigureOptioneDirectItemMessage>
		</S.FigureOptionDirectItemWrapper>
	)
}

export default FigureOptionDirectItem
