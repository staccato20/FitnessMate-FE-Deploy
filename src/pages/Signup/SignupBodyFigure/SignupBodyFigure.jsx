import * as S from "../StyledSignup"
import {useNavigate} from "react-router-dom"
import {MiddleButton, BeforeButton} from "../../../components/"
import MiddleTextCheckbox from "../../../components/TextCheckbox/MiddleTextCheckbox"
import StatusBar from "../../../components/StatusBar/StatusBar"
import {CATEGORY_LIST} from "./constants/CATEGORY_LIST"
import {useSlide} from "./hooks/useSlide"
import Ratio from "./components/Ratio"

const SignupBodyFigure = () => {
	const {slideVolume, slideText, handleSlide} = useSlide()
	const navigate = useNavigate()

	const handleClick = (idx) => {
		const newArr = Array(CATEGORY_LIST.length).fill(false)
		newArr[idx] = true
	}

	const handleBackPage = (e) => {
		e.preventDefault()
		navigate(-1)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
	}

	return (
		<S.SignupContainer>
			<S.SignupTitle>
				<StatusBar status={"3"} />
				체형 정보를 입력해주세요
			</S.SignupTitle>
			<S.SignupUpdonwBalanceWrapper>
				<Ratio
					slideVolume={slideVolume}
					slideText={slideText}
					handleSlide={handleSlide}
				/>
				<span className="bodyfigureText">체형을 선택해주세요</span>
				<S.SignupTextContainer>
					{CATEGORY_LIST?.map((item, index) => {
						return (
							<MiddleTextCheckbox
								key={index}
								handleClick={handleClick}
								$isSelected
								elementidx={index}>
								{item[0]}
							</MiddleTextCheckbox>
						)
					})}
				</S.SignupTextContainer>
				<S.ButtonContainer>
					<BeforeButton onClick={handleBackPage} />
					<MiddleButton onClick={handleSubmit}>회원가입 완료</MiddleButton>
				</S.ButtonContainer>
			</S.SignupUpdonwBalanceWrapper>
		</S.SignupContainer>
	)
}

export default SignupBodyFigure
