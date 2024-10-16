import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";



import CancleModal from "@components/Modal/CancleModal";
import LoginModal from "@components/Modal/LoginModal";
import NavDropDown from "@components/Navbar/NavDropDown";



import logo from "@assets/images/logo.png";



import { useUserInfo } from "@hooks/query/useUserInfo";



import * as S from "./StyledNavbar";


const Navbar = () => {
  const navigate = useNavigate()
  const { userInfo } = useUserInfo()
  const userName = userInfo ? userInfo.userName : undefined
  const [isLoginModal, setIsLoginModal] = useState(false)
  const [isCancleModal, setIsCancleModal] = useState(false)

  const handleSearch = () => {
    navigate("searchworkout")
  }

  const handleMyPage = () => {
    userName ? navigate("mypage") : setIsLoginModal(true)
  }

  const handleRecommend = () => {
    userName ? navigate("recommend/bodypart") : setIsLoginModal(true)
  }

  const handleHome = () => {
    navigate("/")
  }

  const handleLogin = () => {
    navigate("/login")
  }

  return (
    <S.NavbarContainer $isHome={useLocation().pathname === "/"}>
      <S.LogoButton onClick={handleHome}>
        <S.Logo
          src={logo}
          alt="fitmate 로고"
        />
      </S.LogoButton>
      <S.NavLink>
        <S.NavTextContainer>
          <S.NavButton onClick={handleSearch}>검색하기</S.NavButton>
          <S.NavButton onClick={handleRecommend}>추천받기</S.NavButton>
          <S.NavButton onClick={handleMyPage}>내 운동</S.NavButton>
        </S.NavTextContainer>

        {userName ? (
          <NavDropDown userName={userName} />
        ) : (
          <S.LoginButton
            variant="text"
            size="md"
            onClick={handleLogin}>
            로그인
          </S.LoginButton>
        )}
      </S.NavLink>
      <S.NavbarUnderLine $isHome={useLocation().pathname === "/"}>
        {}
      </S.NavbarUnderLine>
      {isLoginModal && <LoginModal setIsLoginModal={setIsLoginModal} />}
      {isCancleModal && <CancleModal setIsCancleModal={setIsCancleModal} />}
    </S.NavbarContainer>
  )
}

export default Navbar