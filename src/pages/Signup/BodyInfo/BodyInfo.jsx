import * as S from "./StyledBodyInfo"
import * as GS from "../StyledSignup"
import {useNavigate} from "react-router-dom"
import {MiddleButton, BeforeButton, Input} from "../../../components"
import StatusBar from "../../../components/StatusBar/StatusBar"
import {FormProvider, useForm} from "react-hook-form"

import {SIGNUP_INPUTS} from "../SIGNUP_INPUTS"
import {formAdapter} from "../../../utils/formadapter"
import useSignupStore from "../../../store/store"

const BodyInfo = () => {
	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			sex: "male",
			height: "",
			weight: "",
		},
	})
	const {formState, handleSubmit, register, getFieldState} = methods
	const {setBodyInfo} = useSignupStore()
	const navigate = useNavigate()

	const handleBackPage = (e) => {
		e.preventDefault()
		navigate(-1)
	}

	const handleNextPage = (bodyInfoForm) => {
		if (formState.isValid) {
			setBodyInfo(bodyInfoForm)
			navigate("/signup/bodyfigure")
		}
	}

	return (
		<GS.SignupWrapper>
			<FormProvider {...methods}>
				<GS.SignupForm onSubmit={handleSubmit(handleNextPage)}>
					<GS.SignupTitle>
						<StatusBar status={"2"} />
						신체 정보를 입력해주세요
					</GS.SignupTitle>
					<S.BodyInfoContainer>
						<S.SexSelect>
							<Input>
								<Input.Label isRequired>성별</Input.Label>
								<Input.Select />
								<Input.Error>{formState.errors?.sex?.message}</Input.Error>
							</Input>
						</S.SexSelect>

						<Input>
							<Input.Label isRequired>키</Input.Label>
							<Input.Input
								props={{
									...formAdapter({
										register: register,
										validator: SIGNUP_INPUTS["height"],
										name: "height",
										$isDirty: getFieldState("height").isDirty,
										$isError: getFieldState("height").error,
									}),
								}}
							/>
							<Input.Error>{formState.errors?.height?.message}</Input.Error>
						</Input>
						<Input>
							<Input.Label isRequired>몸무게</Input.Label>
							<Input.Input
								props={{
									...formAdapter({
										register: register,
										validator: SIGNUP_INPUTS["weight"],
										name: "weight",
										$isDirty: getFieldState("weight").isDirty,
										$isError: getFieldState("weight").error,
									}),
								}}
							/>
							<Input.Error>{formState.errors?.weight?.message}</Input.Error>
						</Input>
					</S.BodyInfoContainer>
					<GS.ButtonContainer>
						<BeforeButton onClick={handleBackPage} />
						<MiddleButton
							type="submit"
							$isValid={formState.isValid}>
							다음
						</MiddleButton>
					</GS.ButtonContainer>
				</GS.SignupForm>
			</FormProvider>
		</GS.SignupWrapper>
	)
}

export default BodyInfo
