import * as S from "../StyledSignup"
import {useNavigate} from "react-router-dom"
import rightarrow from "../../../assets/images/rightarrow.svg"
import {MiddleButton, BeforeButton} from "../../../components/"
import {useState} from "react"
import {
	FilterPriceSlide,
	FilterPriceRangeWrap,
	FilterPriceRange,
	FilterPriceSlideInner,
} from "./StyledBalanceBar"
import MiddleTextCheckbox from "../../../components/TextCheckbox/MiddleTextCheckbox"
import StatusBar from "../../../components/StatusBar/StatusBar"
import {CATEGORY_LIST} from "./constants/CATEGORY_LIST"
import {useSlide} from "./hooks/useSlide"

const SignupBodyFigure = () => {
	const {slideVolume, slideText, handleSlide} = useSlide()

	const navigate = useNavigate()
	const currenturl = window.location.pathname
	const [isCategorySelect, setIsCategorySelect] = useState(false)

	const handleClick = (idx) => {
		const newArr = Array(CATEGORY_LIST.length).fill(false)
		newArr[idx] = true
		setIsCategorySelect(newArr)
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
				<div className="updownBalanceBox">
					<span className="updownBalanceTitle">
						상/하체 균형을 조절해주세요
					</span>
					<div className="updownBalanceBar">
						<span className="updownBalanceBarTitle">{slideText}</span>
						<div className="updownBalanceBarContent">
							<div className="balanceRatioBox">
								<span className="balanceRatio">상체 비중</span>
								<span className="balanceRatioPercent2">
									{slideVolume * 10}%
								</span>
							</div>
							<div className="balnaceBar">
								<FilterPriceSlide>
									<FilterPriceSlideInner
										$rangePercent={Number(slideVolume) * 10}
									/>
								</FilterPriceSlide>
								<FilterPriceRangeWrap>
									<FilterPriceRange
										type="range"
										min={1}
										max={9}
										step="1"
										value={slideVolume}
										onChange={handleSlide}
									/>
								</FilterPriceRangeWrap>
							</div>
							<div className="balanceRatioBox">
								<span className="balanceRatio">하체 비중</span>
								<span className="balanceRatioPercent">
									{100 - slideVolume * 10}%
								</span>
							</div>
						</div>
					</div>
					<span className="bodyfigureText">체형을 선택해주세요</span>
				</div>
				<S.SignupTextContainer>
					{CATEGORY_LIST?.map((item, index) => {
						return (
							<MiddleTextCheckbox
								key={index}
								handleClick={handleClick}
								$isSelected={isCategorySelect[index]}
								elementidx={index}>
								{item[0]}
							</MiddleTextCheckbox>
						)
					})}
				</S.SignupTextContainer>
				<div className="directButtonContainer">
					<button
						className="directbutton"
						onClick={(e) => {
							e.preventDefault()
							navigate(`${currenturl}/direct`)
						}}>
						골격근량, 체지방량 직접 입력
						<img
							src={rightarrow}
							className="rightArrow"
							alt="직접 입력하기 버튼 이미지"
						/>
					</button>
				</div>
				<S.ButtonContainer>
					<BeforeButton onClick={handleBackPage} />
					<MiddleButton onClick={handleSubmit}>회원가입 완료</MiddleButton>
				</S.ButtonContainer>
			</S.SignupUpdonwBalanceWrapper>
		</S.SignupContainer>
	)
}

export default SignupBodyFigure
