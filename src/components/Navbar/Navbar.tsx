import { useState } from "react"
import { useNavigate } from "react-router-dom"

import CancleModal from "@components/Modal/CancleModal"
import LoginModal from "@components/Modal/LoginModal"
import NavDropDown from "@components/Navbar/NavDropDown"

import logoimg from "@assets/images/logo.png"

import { useUserInfo } from "../../hooks/query/useUserInfo"
import * as S from "./StyledNavbar"

const Navbar = () => {
  const navigate = useNavigate()
  const { data } = useUserInfo()
  const userName = data ? data.userName : ""
  const [isLoginModal, setIsLoginModal] = useState(false)
  const [isCancleModal, setIsCancleModal] = useState(false)
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const handleSearch = () => {
    navigate("search/1")
  }

  const handleMyPage = () => {
    userName ? navigate("mypage") : setIsLoginModal(true)
  }

  const handleRecommend = () => {
    userName ? navigate("recommend") : setIsLoginModal(true)
  }

  const handleHome = () => {
    navigate("/")
  }

  const handleLogin = () => {
    navigate("/login")
  }

  return (
    <S.NavbarContainer>
      <S.LogoButton onClick={handleHome}>
        <S.Logo
          src={logoimg}
          alt="fitmate 로고"
        />
      </S.LogoButton>
      <S.NavLink>
        <S.NavTextContainer>
          <S.NavButton onClick={handleSearch}>검색하기</S.NavButton>
          <S.NavButton onClick={handleRecommend}>추천받기</S.NavButton>
          <S.NavButton onClick={handleMyPage}>내 운동</S.NavButton>
        </S.NavTextContainer>
        <NavDropDown
          userName={userName}
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
        />
        {/* {userName ? (
          <NavDropDown userName={userName}>{userName} 님</NavDropDown>
        ) : (
          <Button
            variant="text"
            size="lg"
            onClick={handleLogin}>
            로그인
          </Button>
        )} */}
      </S.NavLink>
      {isLoginModal && <LoginModal setIsLoginModal={setIsLoginModal} />}
      {isCancleModal && <CancleModal setIsCancleModal={setIsCancleModal} />}
    </S.NavbarContainer>
  )
}

export default Navbar
