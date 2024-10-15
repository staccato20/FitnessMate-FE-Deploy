// @ts-nocheck
import { useNavigate } from "react-router-dom"

import Button from "@components/Button/Button"
import Icon from "@components/Icon/Icon"

import { COMPLETE_Nav } from "@pages/Signup/constants/Constants"

import * as GS from "../StyledSignup"
import * as S from "./StyledComplete"

const Complete = () => {
  const navigate = useNavigate()
  const handleNavigate = (url) => {
    navigate(url)
  }
  return (
    <GS.SignupWrapper>
      <GS.SignupContainer>
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
                  <Icon
                    icon="RightArrowBig"
                    size={11}
                  />
                </S.CompleteNavItem>
              </S.CompleteNav>
            )
          })}
        </S.CompleteNavList>
      </GS.SignupContainer>
      <Button
        onClick={() => {
          handleNavigate("/")
        }}
        variant="main"
        size="lg">
        홈으로
      </Button>
    </GS.SignupWrapper>
  )
}

export default Complete
