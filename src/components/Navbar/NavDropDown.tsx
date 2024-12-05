import { useNavigate } from "react-router-dom"

import Button from "@components/Button/Button"

import { useLogout } from "@hooks/mutation/useLogout"
import { useDropDown } from "@hooks/useDropDown"

import * as S from "./StyledNavModal"

interface NavDropDownProps {
  userName?: string
}

const NavDropDown = ({ userName }: NavDropDownProps) => {
  const { isOpen, dropDownRef, toggleDropDown } = useDropDown()
  const { mutate: logout } = useLogout()
  const navigate = useNavigate()

  const handleFixProfile = async () => {
    navigate("/mypage/profile")
    toggleDropDown()
  }

  const handleFixBodyInfo = async () => {
    alert("현재 수정중인 페이지입니다!")
    toggleDropDown()
  }

  return (
    <S.NavDropDownWrapper ref={dropDownRef}>
      <S.NavButton onClick={toggleDropDown}>{userName}님</S.NavButton>
      {isOpen && (
        <S.NavDropDownListWrapper>
          <S.NavDropDownListTitle>
            안녕하세요.
            <br />
            {userName}님!
          </S.NavDropDownListTitle>
          <S.NavDropDownList>
            <Button
              variant="text"
              onClick={() => logout()}>
              로그아웃
            </Button>
            <Button
              variant="text"
              onClick={handleFixProfile}>
              계정 정보 수정
            </Button>
            <Button
              variant="text"
              onClick={handleFixBodyInfo}>
              신체 정보 수정
            </Button>
          </S.NavDropDownList>
        </S.NavDropDownListWrapper>
      )}
    </S.NavDropDownWrapper>
  )
}

export default NavDropDown
