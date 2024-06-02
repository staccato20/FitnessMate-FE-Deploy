import * as S from "./StyledBodyFigure"
import {REGISTER_OPTIONS} from "../../../SignupProfile/constants/REGISTER_OPTIONS"
import {useFormContext} from "react-hook-form"
const BodyFigureOptionDirectItem = () => {
	const {register} = useFormContext()
	return (
		<S.BodyFigureOptionDirectItemWrapper>
			<S.BodyFigureOptionDirectItemList>
				<S.BodyFigureOptionDirectItemOption>
					<S.BodyFigureOptionDirectItemOptionTitle>
						골격근량
					</S.BodyFigureOptionDirectItemOptionTitle>
					<S.BodyFigureOptionDirectItemOptionBox>
						<S.BodyFigureOptionDirectItemOptionInput
							{...register(REGISTER_OPTIONS.MUSCLE_MASS.name, {
								...REGISTER_OPTIONS.MUSCLE_MASS.rules,
							})}
						/>
						<S.BodyFigureOptionDirectItemOptionUnit>
							kg
						</S.BodyFigureOptionDirectItemOptionUnit>
					</S.BodyFigureOptionDirectItemOptionBox>
				</S.BodyFigureOptionDirectItemOption>
				<S.BodyFigureOptionDirectItemOption>
					<S.BodyFigureOptionDirectItemOptionTitle>
						체지방량
					</S.BodyFigureOptionDirectItemOptionTitle>
					<S.BodyFigureOptionDirectItemOptionBox>
						<S.BodyFigureOptionDirectItemOptionInput
							{...register(REGISTER_OPTIONS.BODY_FAT.name, {
								...REGISTER_OPTIONS.BODY_FAT.rules,
							})}
						/>
						<S.BodyFigureOptionDirectItemOptionUnit>
							kg
						</S.BodyFigureOptionDirectItemOptionUnit>
					</S.BodyFigureOptionDirectItemOptionBox>
				</S.BodyFigureOptionDirectItemOption>
			</S.BodyFigureOptionDirectItemList>
			<S.BodyFigureOptioneDirectItemMessage>
				<S.BodyFigureOptioneDirectItemInnerMessage>
					어떻게 알 수 있나요?
				</S.BodyFigureOptioneDirectItemInnerMessage>
				<S.BodyFigureOptioneDirectItemInnerMessage2>
					골격근량과 체지방량은 In-body 기계를 통해 측정 가능해요{" "}
				</S.BodyFigureOptioneDirectItemInnerMessage2>
			</S.BodyFigureOptioneDirectItemMessage>
		</S.BodyFigureOptionDirectItemWrapper>
	)
}

export default BodyFigureOptionDirectItem
