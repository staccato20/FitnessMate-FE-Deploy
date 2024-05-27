import * as S from "./../StyledSignup"
import {useNavigate} from "react-router-dom"
import {MiddleButton, BeforeButton} from "./../../../components/"
import StatusBar from "../../../components/StatusBar/StatusBar"

import {REGISTER_OPTIONS} from "../SignupProfile/constants/REGISTER_OPTIONS"
import {FormProvider, useForm} from "react-hook-form"
import {SignupInput} from "../../../components/SignupInput/SignupInput"

const SignupBodyInfo = () => {
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
			navigate("bodyfigure")
		}
	}

	return (
		<S.SignupContainer>
			<S.SignupTitle>
				<StatusBar status={"2"} />
				신체 정보를 입력해주세요
			</S.SignupTitle>
			<FormProvider {...methods}>
				<S.BodyInfoContainer>
					<S.SexSelect>
						<SignupInput.Label
							isRequired
							isChecked={methods.formState.isValid}>
							성별
						</SignupInput.Label>
						<SignupInput.Select />
						<SignupInput.Error>
							{methods.formState.errors?.sex?.message}
						</SignupInput.Error>
					</S.SexSelect>

					<SignupInput>
						<SignupInput.Label
							isRequired
							isChecked={methods.formState.isValid}>
							키
						</SignupInput.Label>
						<SignupInput.Input
							placeholder="숫자만 입력"
							registerOptions={REGISTER_OPTIONS.HEIGHT}
						/>
						<SignupInput.Error>
							{methods.formState.errors?.height?.message}
						</SignupInput.Error>
					</SignupInput>
					<SignupInput>
						<SignupInput.Label
							isRequired
							isChecked={methods.formState.isValid}>
							몸무게
						</SignupInput.Label>
						<SignupInput.Input
							placeholder="숫자만 입력"
							registerOptions={REGISTER_OPTIONS.WEIGHT}
						/>
						<SignupInput.Error>
							{methods.formState.errors?.weight?.message}
						</SignupInput.Error>
					</SignupInput>
				</S.BodyInfoContainer>
				<S.ButtonContainer>
					<BeforeButton onClick={handleBackPage} />
					<MiddleButton
						onClick={handleSubmit}
						$isValid={methods.formState.isValid}>
						다음
					</MiddleButton>
				</S.ButtonContainer>
			</FormProvider>
		</S.SignupContainer>
	)
}

export default SignupBodyInfo
