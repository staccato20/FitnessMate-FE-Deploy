import * as S from "./StyledBodyFigure"
const BodyFigureOptionDirectItem = () => {
	return (
		<S.BodyFigureOptionDirectItemWrapper>
			<S.BodyFigureOptionDirectItemList>
				<S.BodyFigureOptionDirectItemOption>
					<S.BodyFigureOptionDirectItemOptionTitle>
						골격근량
					</S.BodyFigureOptionDirectItemOptionTitle>
					<S.BodyFigureOptionDirectItemOptionBox>
						<S.BodyFigureOptionDirectItemOptionInput />
						<S.BodyFigureOptionDirectItemOptionUnit>
							kg
						</S.BodyFigureOptionDirectItemOptionUnit>
					</S.BodyFigureOptionDirectItemOptionBox>
				</S.BodyFigureOptionDirectItemOption>
				<S.BodyFigureOptionDirectItemOption>
					<S.BodyFigureOptionDirectItemOptionTitle>
						체지방량
					</S.BodyFigureOptionDirectItemOptionTitle>
					<S.BodyFigureOptionDirectItemOptionBox>
						<S.BodyFigureOptionDirectItemOptionInput />
						<S.BodyFigureOptionDirectItemOptionUnit>
							kg
						</S.BodyFigureOptionDirectItemOptionUnit>
					</S.BodyFigureOptionDirectItemOptionBox>
				</S.BodyFigureOptionDirectItemOption>
			</S.BodyFigureOptionDirectItemList>
			<S.BodyFigureOptioneDirectItemMessage>
				<S.BodyFigureOptioneDirectItemInnerMessage>
					어떻게 알 수 있나요?
				</S.BodyFigureOptioneDirectItemInnerMessage>
				<S.BodyFigureOptioneDirectItemInnerMessage2>
					골격근량과 체지방량은 In-body 기계를 통해 측정 가능해요{" "}
				</S.BodyFigureOptioneDirectItemInnerMessage2>
			</S.BodyFigureOptioneDirectItemMessage>
		</S.BodyFigureOptionDirectItemWrapper>
	)
}

export default BodyFigureOptionDirectItem
