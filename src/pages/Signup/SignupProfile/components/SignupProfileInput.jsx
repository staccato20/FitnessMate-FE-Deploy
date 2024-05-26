import * as S from "../../StyledSignup"
import {useFormContext} from "react-hook-form"

import {REGISTER_OPTIONS} from "../constants/REGISTER_OPTIONS"
import {SignupInput} from "../../../../components/SignupInput/SignupInput"

const SignupProfileInput = () => {
	const {formState, getValues, trigger} = useFormContext()

	return (
		<S.ProfileInputcontainer>
			<SignupInput>
				<SignupInput.Label
					isRequired
					isChecked={formState.isValid}>
					아이디
				</SignupInput.Label>
				<SignupInput.Input
					placeholder="2자리 이상"
					registerOptions={REGISTER_OPTIONS.USER_NAME}
				/>
				<SignupInput.Error>
					{formState.errors?.userName?.message}
				</SignupInput.Error>
			</SignupInput>
			<SignupInput>
				<SignupInput.Label isRequired>생년월일</SignupInput.Label>
				<SignupInput.Input
					placeholder="YYYY-MM-DD"
					registerOptions={REGISTER_OPTIONS.BIRTH_DATE}
				/>
				<SignupInput.Error>
					{formState.errors?.birthDate?.message}
				</SignupInput.Error>
			</SignupInput>
			<SignupInput>
				<SignupInput.Label isRequired>이메일</SignupInput.Label>
				<SignupInput.Input
					placeholder="이메일을 입력해주세요"
					registerOptions={REGISTER_OPTIONS.EMAIL}
				/>
				<SignupInput.Error>
					{formState.errors?.email?.message}
				</SignupInput.Error>
			</SignupInput>
			<SignupInput>
				<SignupInput.Label isRequired>비밀번호</SignupInput.Label>
				<SignupInput.Input
					placeholder="8자리 이상 영문, 숫자 조합"
					registerOptions={{
						...REGISTER_OPTIONS.PASSWORD,
						rules: {
							...REGISTER_OPTIONS.PASSWORD.rules,
							onChange: () => {
								Boolean(formState.dirtyFields.passwordCheck) &&
									trigger("passwordCheck")
							},
						},
					}}
				/>
				<SignupInput.Error>
					{formState.errors?.password?.message}
				</SignupInput.Error>
			</SignupInput>
			<SignupInput>
				<SignupInput.Input
					placeholder="비밀번호 확인"
					registerOptions={{
						...REGISTER_OPTIONS.PASSWORD_CHECK,
						rules: {
							...REGISTER_OPTIONS.PASSWORD_CHECK.rules,
							validate: {
								matchPassword: (passwordCheckValue) =>
									passwordCheckValue === getValues("password"),
							},
						},
					}}
				/>
				<SignupInput.Error>
					{formState.errors?.passwordCheck?.message}
				</SignupInput.Error>
			</SignupInput>
		</S.ProfileInputcontainer>
	)
}

export default SignupProfileInput
