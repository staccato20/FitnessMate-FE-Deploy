import * as S from "../StyledSignup"
import {BeforeButton, MiddleButton} from "../../../components"
import {useNavigate} from "react-router-dom"
import StatusBar from "../../../components/StatusBar/StatusBar"
import ProfileForm from "./components/ProfileForm"
import {useForm} from "react-hook-form"
import useSignupStore from "../../../store/store"

const Profile = () => {
	const {setProfile} = useSignupStore()
	const navigate = useNavigate()
	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			userName: "",
			birthDate: "",
			email: "",
			password: "",
			passwordCheck: "",
		},
	})
	const {handleSubmit, formState} = methods

	const handleNextPage = (formValue) => {
		if (formState.isValid) {
			setProfile(formValue)
			navigate(`/signup/bodyinfo`)
		}
	}

	const handleBackPage = (e) => {
		e.preventDefault()
		navigate(-1)
	}

	return (
		<S.SignupForm onSubmit={handleSubmit(handleNextPage)}>
			<S.SignupTitle>
				<StatusBar status={"1"} />
				회원 정보를 입력해주세요
			</S.SignupTitle>
			<ProfileForm methods={methods} />
			<S.ButtonContainer>
				<BeforeButton onClick={handleBackPage} />
				<MiddleButton
					$isValid={formState.isValid}
					type="submit">
					다음
				</MiddleButton>
			</S.ButtonContainer>
		</S.SignupForm>
	)
}

export default Profile
