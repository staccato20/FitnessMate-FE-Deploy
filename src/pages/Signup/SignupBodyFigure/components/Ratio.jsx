import * as S from "./StyledRatio"
import plus from "../../../../assets/images/plus.png"
import minus from "../../../../assets/images/minus.png"
const Ratio = ({slideText, slideVolume, handleSlide}) => {
	return (
		<S.RatioWrapper>
			<S.RatioTitle>상/하체 균형을 조절해주세요</S.RatioTitle>
			<S.RatioBoxWrapper>
				<S.RatioBox>
					<S.RatioContent>
						<S.RatioBoxTitle>상체 비중</S.RatioBoxTitle>
						<S.RatioPercentBox>
							<S.RatioPercent>{slideVolume * 10}%</S.RatioPercent>
						</S.RatioPercentBox>
					</S.RatioContent>
					<S.RatioButtonBox>
						<S.RatioPlusButton>
							<S.RatioPlusButtonImg
								src={plus}
								alt="상체 비중 증가 버튼"
							/>
						</S.RatioPlusButton>
						<S.RatioMinusButton>
							<S.RatioMinusButtonImg
								src={minus}
								alt="상체 비중 증가 버튼"
							/>
						</S.RatioMinusButton>
					</S.RatioButtonBox>
				</S.RatioBox>
				<S.RatioBox>
					<S.RatioContent>
						<S.RatioBoxTitle>하체 비중</S.RatioBoxTitle>
						<S.RatioPercentBox>
							<S.RatioPercent>{100 - slideVolume * 10}%</S.RatioPercent>
						</S.RatioPercentBox>
					</S.RatioContent>
					<S.RatioButtonBox>
						<S.RatioPlusButton>
							<S.RatioPlusButtonImg
								src={plus}
								alt="하체 비중 증가 버튼"
							/>
						</S.RatioPlusButton>
						<S.RatioMinusButton>
							<S.RatioMinusButtonImg
								src={minus}
								alt="하체 비중 감소 버튼"
							/>
						</S.RatioMinusButton>
					</S.RatioButtonBox>
				</S.RatioBox>
			</S.RatioBoxWrapper>
			<S.RatioMessage>{slideText}</S.RatioMessage>
		</S.RatioWrapper>
	)
}

export default Ratio
