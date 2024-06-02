import * as S from "../StyledSignup"
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
const SignupBodyFigure = () => {
	const {ratioValue, ratioText, handleRatio} = useSlide()
	const {selectedMenu, handleSelectMenu} = useSelectMenu()
	const {selectedFigure, handleSelectFigure} = useSelectFigure()
	const methods = useForm({
		defaultValues: {
			bodyFat: "",
			muscleMass: "",
		},
	})
	const navigate = useNavigate()

	const handleBackPage = (e) => {
		e.preventDefault()
		navigate(-1)
	}
	const onSubmit = (data) => console.log(data)

	return (
		<S.SignupContainer onSubmit={methods.handleSubmit(onSubmit)}>
			<S.SignupTitle>
				<StatusBar status={"3"} />
				체형 정보를 입력해주세요
			</S.SignupTitle>
			<FormProvider {...methods}>
				<S.SignupUpdonwBalanceWrapper>
					<Ratio
						ratioValue={ratioValue}
						ratioText={ratioText}
						handleRatio={handleRatio}
					/>
					<BodyFigure
						selectedMenu={selectedMenu}
						handleSelectMenu={handleSelectMenu}
						selectedFigure={selectedFigure}
						handleSelectFigure={handleSelectFigure}
					/>
					<S.ButtonContainer>
						<BeforeButton onClick={handleBackPage} />
						<MiddleButton type="submit">회원가입 완료</MiddleButton>
					</S.ButtonContainer>
				</S.SignupUpdonwBalanceWrapper>
			</FormProvider>
		</S.SignupContainer>
	)
}

export default SignupBodyFigure
