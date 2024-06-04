import {useNavigate} from "react-router-dom"
import * as S from "./StyledComplete"
import * as GS from "../StyledSignup"
import {BigButton} from "../../../components"
import rightarrow2 from "../../../assets/images/rightarrow2.svg"
import {COMPLETE_Nav} from "./constants/COMPLETE_NAV"

const Complete = () => {
	const navigate = useNavigate()
	const handleNavigate = (url) => {
		navigate(url)
	}

	return (
		<GS.SignupContainer>
			{/* 제목들 중 마지막 페이지만 가운데 정렬 -> 인라인으로 처리 */}
			<GS.SignupTitle>회원가입이 완료되었습니다.</GS.SignupTitle>
			<S.CompleteNavTitle>바로 이용해보세요.</S.CompleteNavTitle>
			<S.CompleteNavList>
				{COMPLETE_Nav.map(([_, nav]) => {
					return (
						<S.CompleteNav>
							<S.CompleteNavItem
								onClick={() => {
									handleNavigate(nav.url)
								}}
								type="button">
								<S.CompleteNavItemTitle>
									{nav.title}
									<br />
									<S.CompleteNavItemText>{nav.message}</S.CompleteNavItemText>
								</S.CompleteNavItemTitle>
								<S.CompleteNavItemImg
									src={rightarrow2}
									alt="회원가입 완료 후 이동 버튼"
								/>
							</S.CompleteNavItem>
						</S.CompleteNav>
					)
				})}
			</S.CompleteNavList>

			<GS.ButtonContainer>
				<BigButton
					type="button"
					onClick={() => {
						handleNavigate("/")
					}}>
					홈으로
				</BigButton>
			</GS.ButtonContainer>
		</GS.SignupContainer>
	)
}

export default Complete
