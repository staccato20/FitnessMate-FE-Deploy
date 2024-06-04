import * as S from "../StyledProfile"
import {useFormContext} from "react-hook-form"

import {Input} from "../../../../components"

const ProfileInput = () => {
	const {formState, getValues, trigger} = useFormContext()

	return (
		<S.ProfileInputForm>
			{/* <Input>
				<Input.Label
					isRequired
					isChecked={formState.isValid}>
					아이디
				</Input.Label>
				<Input.Input registerOptions={REGISTER_OPTIONS.USER_NAME} />
				<Input.Error>{formState.errors?.userName?.message}</Input.Error>
			</Input>
			<Input>
				<Input.Label isRequired>생년월일</Input.Label>
				<Input.Input registerOptions={REGISTER_OPTIONS.BIRTH_DATE} />
				<Input.Error>{formState.errors?.birthDate?.message}</Input.Error>
			</Input>
			<Input>
				<Input.Label isRequired>이메일</Input.Label>
				<Input.Input registerOptions={REGISTER_OPTIONS.EMAIL} />
				<Input.Error>{formState.errors?.email?.message}</Input.Error>
			</Input>
			<Input>
				<Input.Label isRequired>비밀번호</Input.Label>
				<Input.Input
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
				<Input.Error>{formState.errors?.password?.message}</Input.Error>
			</Input>
			<Input>
				<Input.Input
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
				<Input.Error>{formState.errors?.passwordCheck?.message}</Input.Error>
			</Input> */}
		</S.ProfileInputForm>
	)
}

export default ProfileInput
