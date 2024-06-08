import * as S from "../StyledSignup"
import StatusBar from "../../../components/StatusBar/StatusBar"
import ProfileForm from "./components/ProfileForm"
import {useForm} from "react-hook-form"
import useSignupStore from "../../../store/store"
import SignupButton from "../Button/SignupButton"
import {useNavigate} from "react-router-dom"

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

	return (
		<S.SignupForm onSubmit={handleSubmit(handleNextPage)}>
			<S.SignupTitle>
				<StatusBar status={"1"} />
				회원 정보를 입력해주세요
			</S.SignupTitle>
			<ProfileForm methods={methods} />
			<SignupButton formState={methods.formState}>다음</SignupButton>
		</S.SignupForm>
	)
}

export default Profile
