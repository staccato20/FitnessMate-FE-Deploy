import * as GS from "../StyledSignup"
import * as S from "./StyledSignupBodyFigure"
import {useNavigate} from "react-router-dom"

import MiddleButton from "../../../components/Button/MiddleButton"
import BeforeButton from "../../../components/Button/BeforeButton"
import StatusBar from "../../../components/StatusBar/StatusBar"
import {useSlide} from "./hooks/useSlide"
import BodyFigure from "./components/BodyFigure/BodyFigure"
import Ratio from "./components/Ratio/Ratio"
import {useSelectMenu} from "./hooks/useSelectMenu"
import {useSelectFigure} from "./hooks/useSelectFigure"
import {FormProvider, useForm} from "react-hook-form"
import {CATEGORY_LIST} from "./constants/CATEGORY_LIST"
const SignupBodyFigure = () => {
	const {ratioValue, ratioText, handleRatio} = useSlide()
	const {selectedMenu, handleSelectMenu} = useSelectMenu()
	const {selectedFigure, handleSelectFigure} = useSelectFigure()
	const methods = useForm({
		defaultValues: {
			bodyFat: 0,
			muscleMass: 0,
		},
	})

	const navigate = useNavigate()

	const handleBackPage = (e) => {
		e.preventDefault()
		navigate(-1)
	}
	const onSubmit = (figure) => {
		let submission
		if (selectedMenu === 0) {
			submission = {
				upDownBalance: ratioValue,
				bodyFat: CATEGORY_LIST[selectedFigure][1][0],
				muscleMass: CATEGORY_LIST[selectedFigure][1][1],
			}
		} else if (selectedMenu === 1) {
			submission = {
				upDownBalance: ratioValue,
				bodyFat: figure.bodyFat,
				muscleMass: figure.muscleMass,
			}
		}

		console.log(submission)
	}

	return (
		<GS.SignupContainer onSubmit={methods.handleSubmit(onSubmit)}>
			<GS.SignupTitle>
				<StatusBar status={"3"} />
				체형 정보를 입력해주세요
			</GS.SignupTitle>
			<S.SignupBalanceWrapper>
				<Ratio
					ratioValue={ratioValue}
					ratioText={ratioText}
					handleRatio={handleRatio}
				/>
				<FormProvider {...methods}>
					<BodyFigure
						selectedMenu={selectedMenu}
						handleSelectMenu={handleSelectMenu}
						selectedFigure={selectedFigure}
						handleSelectFigure={handleSelectFigure}
					/>
				</FormProvider>
				<GS.ButtonContainer>
					<BeforeButton onClick={handleBackPage} />
					<MiddleButton type="submit">회원가입 완료</MiddleButton>
				</GS.ButtonContainer>
			</S.SignupBalanceWrapper>
		</GS.SignupContainer>
	)
}

export default SignupBodyFigure
