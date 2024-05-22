import {ProfileInputContentWrapper} from "../../../../components/ProfileInput/StyledProfileInput"
import * as S from "../../StyledSignup"
import {useForm} from "react-hook-form"
import InputName from "../../../../components/ProfileInput/SignupInput/components/InputName"
import {SignupInput} from "../../../../components/ProfileInput/SignupInput/SignupInput"

const SignupProfileInput = () => {
	const {
		register,
		formState: {errors},
	} = useForm({mode: "onChange"})
	console.log(errors)

	return (
		<S.ProfileInputcontainer>
			<SignupInput>
				{/* <SignupInput.Label isRequired>아이디</SignupInput.Label> */}
				<SignupInput.Input
					placeholder="2자리 이상"
					registerOptions={register("userName", {
						required: true,
						pattern: {
							value: /^[가-힣]{2,10}$/,
							message: "아이디는 필수 입력입니다.",
						},
					})}
				/>
				{/* {errors?.userName?.message && errors.userName.message} */}
			</SignupInput>
			{/* <InputName isRequired>생년월일</InputName> */}
			<ProfileInputContentWrapper
				placeholder="YYYY-MM-DD"
				{...register("birthDate", {
					required: true,
					pattern: {
						value: /^\d{4}-\d{2}-\d{2}$/,
						message: "생년월일은 필수 입력입니다.",
					},
				})}
			/>
			{/* {errors?.birthDate?.message && (
				<S.InputWarning>{errors.birthDate.message}</S.InputWarning>
			)}
			<InputName isRequired>이메일</InputName>
			<ProfileInputContentWrapper
				placeholder="이메일을 입력해주세요"
				{...register("loginEmail", {
					required: true,
					pattern: {
						value: /^(.+)@(\S+)$/,
						message: "이메일은 필수 입력입니다.",
					},
				})}
			/>
			{errors?.loginEmail?.message && (
				<S.InputWarning>{errors?.loginEmail?.message}</S.InputWarning>
			)}
			<InputName isRequired>비밀번호</InputName>
			<ProfileInputContentWrapper
				placeholder="8자리 이상 영문, 숫자 조합"
				{...register("password", {
					required: true,
					pattern: {
						value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
						message: "비밀번호는 필수 입력입니다.",
					},
				})}
			/>
			{errors?.password?.message && (
				<S.InputWarning>{errors?.password?.message}</S.InputWarning>
			)}
			<ProfileInputContentWrapper
				placeholder="비밀번호 확인"
				{...register("passwordCheck", {
					required: true,
					pattern: {message: "비밀번호가 일치하지 않습니다."},
				})}
			/>{" "}
			*/}
		</S.ProfileInputcontainer>
	)
}

export default SignupProfileInput
