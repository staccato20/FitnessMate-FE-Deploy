import * as GS from "../StyledSignup"
import * as S from "./StyledBodyFigure"
import {useNavigate} from "react-router-dom"

import MiddleButton from "../../../components/Button/MiddleButton"
import BeforeButton from "../../../components/Button/BeforeButton"
import StatusBar from "../../../components/StatusBar/StatusBar"
import {useSlide} from "./hooks/useSlide"
import Figure from "./components/Figure/Figure"
import Ratio from "./components/Ratio/Ratio"
import {useSelectMenu} from "./hooks/useSelectMenu"
import {useSelectFigure} from "./hooks/useSelectFigure"
import {FormProvider, useForm} from "react-hook-form"
import useSignupStore from "../../../store/store"
const BodyFigure = () => {
	const {ratioValue, ratioText, handleRatio} = useSlide()
	const {selectedMenu, handleSelectMenu} = useSelectMenu()
	const {selectedFigure, handleSelectFigure} = useSelectFigure()
	console.log("gg")
	const methods = useForm({
		defaultValues: {
			bodyFat: 0,
			muscleMass: 0,
		},
	})
	const {formState, handleSubmit} = methods
	const {profile, bodyinfo} = useSignupStore()

	const navigate = useNavigate()

	const handleBackPage = (e) => {
		e.preventDefault()
		navigate(-1)
	}
	const onSubmit = (figure) => {
		console.log(ratioValue, selectedFigure)
		if (formState.isValid) {
			console.log(profile, bodyinfo)
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
			<GS.ButtonContainer>
				<BeforeButton onClick={handleBackPage} />
				<MiddleButton
					$isValid={formState.isValid}
					type="submit">
					회원가입 완료
				</MiddleButton>
			</GS.ButtonContainer>
		</GS.SignupForm>
	)
}

export default BodyFigure
