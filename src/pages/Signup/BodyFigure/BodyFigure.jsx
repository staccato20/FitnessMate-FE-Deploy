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
const BodyFigure = () => {
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
	const onSubmit = (figure) => {}

	return (
		<GS.SignupWrapper>
			<GS.SignupForm onSubmit={methods.handleSubmit(onSubmit)}>
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
			</GS.SignupForm>
			<GS.ButtonContainer>
				<BeforeButton onClick={handleBackPage} />
				<MiddleButton type="submit">회원가입 완료</MiddleButton>
			</GS.ButtonContainer>
		</GS.SignupWrapper>
	)
}

export default BodyFigure
