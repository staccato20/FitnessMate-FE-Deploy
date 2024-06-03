import {useNavigate} from "react-router-dom"
import * as S from "./StyledSignupComplete"
import * as GS from "../StyledSignup"
import {BigButton} from "../../../components"
import rightarrow2 from "../../../assets/images/rightarrow2.svg"
import {COMPLETE_Nav} from "./constatns/COMPLETE_NAV"

const SignupComplete = () => {
	const navigate = useNavigate()

	const navigateHome = () => {
		navigate("/")
	}

	const handleNavigate = (url) => {
		navigate(url)
	}
	return (
		<GS.SignupContainer>
			{/* 제목들 중 마지막 페이지만 가운데 정렬 -> 인라인으로 처리 */}
			<GS.SignupTitle>회원가입이 완료되었습니다.</GS.SignupTitle>
			<S.SignupCompleteNavTitle>바로 이용해보세요.</S.SignupCompleteNavTitle>
			<S.SignupCompleteNavList>
				{COMPLETE_Nav.map(([_, nav]) => {
					return (
						<S.SignupCompleteNav>
							<S.SignupCompleteNavItem
								onClick={() => {
									handleNavigate(nav.url)
								}}
								type="button">
								<S.SignupCompleteNavItemTitle>
									{nav.title}
									<br />
									<S.SignupCompleteNavItemText>
										{nav.message}
									</S.SignupCompleteNavItemText>
								</S.SignupCompleteNavItemTitle>
								<S.SignupCompleteNavItemImg
									src={rightarrow2}
									alt="회원가입 완료 후 이동 버튼"
								/>
							</S.SignupCompleteNavItem>
						</S.SignupCompleteNav>
					)
				})}
			</S.SignupCompleteNavList>

			<GS.ButtonContainer>
				<BigButton
					type="button"
					onClick={navigateHome}>
					홈으로
				</BigButton>
			</GS.ButtonContainer>
		</GS.SignupContainer>
	)
}

export default SignupComplete
