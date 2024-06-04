import * as S from "./StyledBodyInfo"
import * as GS from "../StyledSignup"
import {useNavigate} from "react-router-dom"
import {MiddleButton, BeforeButton, Input} from "../../../components"
import StatusBar from "../../../components/StatusBar/StatusBar"
import {FormProvider, useForm} from "react-hook-form"

import {SIGNUP_INPUTS} from "../SIGNUP_INPUTS"
import {formAdapter} from "../../../utils/formadapter"

const BodyInfo = () => {
	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			sex: "male",
			height: "",
			weight: "",
		},
	})
	const navigate = useNavigate()

	const handleBackPage = (e) => {
		e.preventDefault()
		navigate(-1)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (methods.formState.isValid) {
			navigate("/signup/bodyfigure")
		}
	}

	return (
		<GS.SignupContainer>
			<GS.SignupTitle>
				<StatusBar status={"2"} />
				신체 정보를 입력해주세요
			</GS.SignupTitle>
			<FormProvider {...methods}>
				<S.BodyInfoContainer>
					<S.SexSelect>
						<Input>
							<Input.Label
								isRequired
								isChecked={methods.formState.isValid}>
								성별
							</Input.Label>
							<Input.Select />
							<Input.Error>
								{methods.formState.errors?.sex?.message}
							</Input.Error>
						</Input>
					</S.SexSelect>

					<Input>
						<Input.Label
							isRequired
							isChecked={methods.formState.isValid}>
							키
						</Input.Label>
						<Input.Input
							props={{
								...formAdapter({
									register: methods.register,
									validator: SIGNUP_INPUTS["height"],
									name: "height",
									$isDirty: methods.getFieldState("height").isDirty,
									$isError: methods.getFieldState("height").error,
								}),
							}}
						/>
						<Input.Error>
							{methods.formState.errors?.height?.message}
						</Input.Error>
					</Input>
					<Input>
						<Input.Label
							isRequired
							isChecked={methods.formState.isValid}>
							몸무게
						</Input.Label>
						<Input.Input
							props={{
								...formAdapter({
									register: methods.register,
									validator: SIGNUP_INPUTS["weight"],
									name: "weight",
									$isDirty: methods.getFieldState("weight").isDirty,
									$isError: methods.getFieldState("weight").error,
								}),
							}}
						/>
						<Input.Error>
							{methods.formState.errors?.weight?.message}
						</Input.Error>
					</Input>
				</S.BodyInfoContainer>
				<GS.ButtonContainer>
					<BeforeButton onClick={handleBackPage} />
					<MiddleButton
						onClick={handleSubmit}
						$isValid={methods.formState.isValid}>
						다음
					</MiddleButton>
				</GS.ButtonContainer>
			</FormProvider>
		</GS.SignupContainer>
	)
}

export default BodyInfo
