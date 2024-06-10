import * as S from "./StyledFigure"
import Input from "../../../../../components/Input/Input"

import {useFormContext} from "react-hook-form"
import {formAdapter} from "../../../../../utils/formadapter"
import {SIGNUP_INPUTS} from "../../../SIGNUP_INPUTS"

const FigureOptionDirectItem = () => {
	const methods = useFormContext()

	const {register, formState} = methods
	return (
		<S.FigureOptionDirectItemWrapper>
			<S.FigureOptionDirectItemList>
				<S.FigureOptionDirectItemOption>
					<S.FigureOptionDirectItemOptionBox>
						<Input>
							<Input.Label htmlFor="bodyFat">골격근량</Input.Label>
							<S.FigureOptionInputWrapper>
								<Input.Input
									type={"number"}
									props={{
										...formAdapter({
											register,
											validator: SIGNUP_INPUTS["bodyFat"],
											name: "bodyFat",
											$isDirty: formState.dirtyFields.bodyFat,
											$isError: formState.errors.bodyFat,
										}),
									}}
								/>
								<Input.Text>kg</Input.Text>
							</S.FigureOptionInputWrapper>
						</Input>
					</S.FigureOptionDirectItemOptionBox>
				</S.FigureOptionDirectItemOption>
				<S.FigureOptionDirectItemOption>
					<S.FigureOptionDirectItemOptionBox>
						<Input>
							<Input.Label htmlFor="muscleMass">체지방량</Input.Label>
							<S.FigureOptionInputWrapper>
								<Input.Input
									type={"number"}
									props={{
										...formAdapter({
											register,
											validator: SIGNUP_INPUTS["muscleMass"],
											name: "muscleMass",
											$isDirty: formState.dirtyFields.muscleMass,
											$isError: formState.errors.muscleMass,
										}),
									}}
								/>
								<Input.Text>kg</Input.Text>
							</S.FigureOptionInputWrapper>
						</Input>
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
