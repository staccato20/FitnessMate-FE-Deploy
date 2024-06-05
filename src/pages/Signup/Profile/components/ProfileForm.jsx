import * as S from "../StyledProfile"
import {Input} from "../../../../components"
import {formAdapter} from "../../../../utils/formadapter"
import {SIGNUP_INPUTS} from "../../SIGNUP_INPUTS"

const ProfileForm = ({methods: {register, formState, trigger, getValues}}) => {
	return (
		<S.ProfileFormWrapper>
			<Input>
				<Input.Label
					isRequired
					htmlFor="userName">
					이름
				</Input.Label>
				<Input.Input
					props={{
						...formAdapter({
							register,
							validator: SIGNUP_INPUTS["userName"],
							name: "userName",
							$isDirty: formState.dirtyFields.userName,
							$isError: formState.errors.userName,
						}),
					}}
				/>
				<Input.Error>{formState.errors?.userName?.message}</Input.Error>
			</Input>
			<Input>
				<Input.Label
					isRequired
					htmlFor="birthDate">
					생년월일
				</Input.Label>
				<Input.Input
					props={{
						...formAdapter({
							register,
							validator: SIGNUP_INPUTS["birthDate"],
							name: "birthDate",
							$isDirty: formState.dirtyFields.birthDate,
							$isError: formState.errors.birthDate,
						}),
					}}
				/>
				<Input.Error>{formState.errors?.birthDate?.message}</Input.Error>
			</Input>
			<Input>
				<Input.Label
					isRequired
					htmlFor="email">
					이메일
				</Input.Label>
				<Input.Input
					props={{
						...formAdapter({
							register,
							validator: SIGNUP_INPUTS["email"],
							name: "email",
							$isDirty: formState.dirtyFields.email,
							$isError: formState.errors.email,
						}),
					}}
				/>
				<Input.Error>{formState.errors?.email?.message}</Input.Error>
			</Input>
			<Input>
				<Input.Label
					isRequired
					htmlFor="password">
					비밀번호
				</Input.Label>
				<Input.Input
					props={{
						...formAdapter({
							register,
							validator: SIGNUP_INPUTS["password"],
							name: "password",
							$isDirty: formState.dirtyFields.password,
							$isError: formState.errors.password,
							onChange: (e) => {
								register("password").onChange(e)
								if (formState.dirtyFields.passwordCheck) {
									trigger("passwordCheck")
								}
							},
						}),
					}}
				/>
				<Input.Error>{formState.errors?.password?.message}</Input.Error>
			</Input>
			<Input>
				<Input.Label
					isRequired
					htmlFor="passwordCheck">
					비밀번호 확인
				</Input.Label>
				<Input.Input
					props={{
						...formAdapter({
							register,
							validator: {
								...SIGNUP_INPUTS["passwordCheck"],
								validate: {
									required: "비밀번호 확인은 필수 입력입니다.",
									matchPassword: (value) => {
										const password = getValues("password")
										return value === password || "비밀번호가 일치하지 않습니다."
									},
								},
							},
							name: "passwordCheck",
							$isDirty: formState.dirtyFields.passwordCheck,
							$isError: formState.errors.passwordCheck,
						}),
					}}
				/>
				<Input.Error>{formState.errors?.passwordCheck?.message}</Input.Error>
			</Input>
		</S.ProfileFormWrapper>
	)
}

export default ProfileForm
