// < 네브바 포함 레이아웃 >

import React, { useEffect, useState } from "react";
import * as S from "./StyledNavbar";
import { useNavigate } from "react-router-dom";
import TokenApi from "../../apis/TokenApi";
import profilImg from "../../assets/images/profileimg.svg";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../../recoil/atom";

// 브라우저 종료 감지
const Navbar = () => {
  const navigate = useNavigate();
  // 로컬스토리지에 값이 있는 경우 로그인
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [userName, setUserName] = useState(null);
  const [isprofileBox, setIsProfileBox] = useState(false);

  // 로그아웃
  const handleLogout = async () => {
    await TokenApi.put("auth/logout");
    setIsLoggedIn(false);
    localStorage.clear();
    navigate("/");
  };

  // 브라우저 종료 시 JWT토큰 관련된 값 삭제(자동 로그아웃)
  const RemoveJwt = (fn) => {
    const cb = React.useRef(fn);

    useEffect(() => {
      const onUnload = cb.current;
      // 브라우저 종료
      window.addEventListener("beforeunload", onUnload);
    }, []);
  };

  RemoveJwt((e) => {
    // 로그인 유지
    if (!JSON.parse(localStorage.getItem("rememberMe"))) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("rememberMe");
    }
  });

  // 사용자 이름 받아오기
  const fetchData = async () => {
    // 로그인 상태일때만
    if (isLoggedIn) {
      try {
        const response = await TokenApi.get("user/private");
        setUserName(response.data.userName);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [isLoggedIn]);

  return (
    <S.NavbarContainer>
      <button
        className="nav-logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <S.NavLink>
        <S.NavTextContainer>
          <i className="fa-solid fa-bars"></i>
          <S.NavButton>검색하기</S.NavButton>
          <S.NavButton
            onClick={() => {
              navigate("recommend");
            }}
          >
            추천받기
          </S.NavButton>
          <S.NavButton>내 운동</S.NavButton>
        </S.NavTextContainer>
        {isLoggedIn ? (
          <S.NavLoginButtonContainer
            isprofileBox={isprofileBox}
            onClick={(e) => {
              setIsProfileBox(!isprofileBox);
            }}
          >
            <img src={profilImg} className="profilImg" alt="프로필 이미지" />
            <span className="profileName">{userName}</span>
          </S.NavLoginButtonContainer>
        ) : (
          <S.NavLoginButtonContainer
            onClick={() => {
              navigate("login");
            }}
          >
            로그인
          </S.NavLoginButtonContainer>
        )}
        <S.NavProfileBox isprofileBox={isprofileBox}>
          <span className="profileBoxTitle">
            안녕하세요
            <br /> {userName}님
          </span>
          <button
            className="profileBoxItem"
            onClick={() => {
              setIsProfileBox(false);
              handleLogout();
            }}
          >
            로그아웃
          </button>
          <button className="profileBoxItem">계정 정보 수정</button>
          <button className="profileBoxItem">신체 정보 수정</button>
        </S.NavProfileBox>
      </S.NavLink>
    </S.NavbarContainer>
  );
};

export default Navbar;
