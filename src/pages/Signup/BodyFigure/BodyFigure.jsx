import * as GS from "../StyledSignup"
import * as S from "./StyledBodyFigure"
import StatusBar from "../../../components/StatusBar/StatusBar"
import {useSlide} from "./hooks/useSlide"
import Figure from "./components/Figure/Figure"
import Ratio from "./components/Ratio/Ratio"
import {useSelectMenu} from "./hooks/useSelectMenu"
import {useSelectFigure} from "./hooks/useSelectFigure"
import {FormProvider, useForm} from "react-hook-form"
import useSignupStore from "../../../store/store"
import SignupButton from "../Button/SignupButton"
import {CATEGORY_LIST} from "./constants/CATEGORY_LIST"
import {SIGNUP_INPUTS} from "../SIGNUP_INPUTS"
import {userPostAPI} from "../../../apis/API"

const BodyFigure = () => {
	const {ratioValue, ratioText, handleRatio} = useSlide()
	const {selectedMenu, handleSelectMenu} = useSelectMenu()
	const {selectedFigure, handleSelectFigure} = useSelectFigure()

	const methods = useForm(SIGNUP_INPUTS.DEFAULT_VALUES["BODYFIGURE"])
	const {formState, handleSubmit} = methods
	const {profile, bodyinfo} = useSignupStore()

	const onSubmit = async () => {
		if (formState.isValid) {
			const submission = {
				...profile,
				...bodyinfo,
				...{
					updownBalance: ratioValue,
					bodyFat: CATEGORY_LIST[selectedFigure][1][0],
					muscleMass: CATEGORY_LIST[selectedFigure][1][1],
				},
			}
			try {
				const response = await userPostAPI.post("", submission)
				console.log(response)
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<GS.SignupForm onSubmit={handleSubmit(onSubmit)}>
			<GS.SignupTitle>
				<StatusBar status={"3"} />
				체형 정보를 입력해주세요
			</GS.SignupTitle>
			<S.BodyFigureWrapper>
				<Ratio
					ratioValue={ratioValue}
					ratioText={ratioText}
					handleRatio={handleRatio}
				/>
				<FormProvider {...methods}>
					<Figure
						selectedMenu={selectedMenu}
						handleSelectMenu={handleSelectMenu}
						selectedFigure={selectedFigure}
						handleSelectFigure={handleSelectFigure}
					/>
				</FormProvider>
			</S.BodyFigureWrapper>
			<SignupButton $isValid={formState.isValid}>회원가입 완료</SignupButton>
		</GS.SignupForm>
	)
}

export default BodyFigure
