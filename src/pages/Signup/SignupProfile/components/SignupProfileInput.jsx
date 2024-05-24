import * as S from "../../StyledSignup"
import {useFormContext} from "react-hook-form"
import {SignupInput} from "../../../../components/ProfileInput/SignupInput/SignupInput"
import {REGISTER_OPTIONS} from "../constants/REGISTER_OPTIONS"

const SignupProfileInput = () => {
	const {formState, getValues} = useFormContext()

	return (
		<S.ProfileInputcontainer>
			<SignupInput>
				<SignupInput.Label isRequired>아이디</SignupInput.Label>
				<SignupInput.Input
					name="userName"
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
					name="birthDate"
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
					name="email"
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
					name="password"
					placeholder="8자리 이상 영문, 숫자 조합"
					registerOptions={REGISTER_OPTIONS.PASSWORD}
				/>
				<SignupInput.Error>
					{formState.errors?.password?.message}
				</SignupInput.Error>
			</SignupInput>
			<SignupInput>
				<SignupInput.Input
					name="passwordCheck"
					placeholder="비밀번호 확인"
					registerOptions={{
						...REGISTER_OPTIONS.PASSWORD_CHECK,
						validate: {
							matchPassword: (value) => {
								const {password} = getValues()
								return password === value
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
