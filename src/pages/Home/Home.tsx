import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-scroll"

import { useUserInfo } from "hooks/query/useUserInfo"

import Button from "@components/Button/Button"
import Icon from "@components/Icon/Icon"
import LoginModal from "@components/Modal/LoginModal"

import fourthFirstImg from "@assets/images/fourthFirstImg.png"
import fourthThirdImg from "@assets/images/fourthThirdImg.png"
import homebanner from "@assets/images/homebanner.png"
import slide2 from "@assets/images/slide2.png"
import slide from "@assets/images/slide.png"

import { Title } from "@pages/Login/StyledLogin"

import * as S from "./StyledHome"

const TABS = [
  {
    title: "추천 받고",
    id: 0,
  },
  {
    title: "결과 보고",
    id: 1,
  },
  {
    title: "루틴 까지",
    id: 2,
  },
]

export const Home = () => {
  const navigate = useNavigate()
  const { data } = useUserInfo()
  const loginState = data ? true : false
  const [selectedSlideNum, setSelectedSlideNum] = useState(0)

  const handleSlideNum = (idx: number) => {
    setSelectedSlideNum(idx)
  }

  console.log(setSelectedSlideNum)

  const [isLoginModal, setIsLoginModal] = useState(false)

  const handleSearch = () => {
    navigate("search/1")
  }

  // const handleRecommend = () => {
  //   if (loginState) {
  //     navigate("recommend/prolog")
  //   } else {
  //     setIsLoginModal(true)
  //   }
  // }

  // const handleMyPage = () => {
  //   if (loginState) {
  //     navigate("mypage")
  //   } else {
  //     setIsLoginModal(true)
  //   }
  // }

  return (
    <S.HomeContainer>
      <S.First>
        <S.FirstContainer>
          <S.FirstSubTitle>AI 기반의</S.FirstSubTitle>
          <S.FirstTitle>
            정확하고 빠른
            <br />
            개인맞춤 추천
          </S.FirstTitle>
        </S.FirstContainer>
        <S.HomeBanner
          src={homebanner}
          alt="홈 배너"
        />
      </S.First>
      <S.Second>
        <S.SecondTextWrapper>
          <S.SecondText>이제껏 경험하지 못했던 운동 코칭 경험</S.SecondText>
          <S.SecondText2>에서 경험해 보세요</S.SecondText2>
        </S.SecondTextWrapper>
        <Link
          to="link"
          spy={true}
          smooth={true}>
          <S.SecondButtonWrapper>
            경험하기
            <Icon icon="DownArrow" />
          </S.SecondButtonWrapper>
        </Link>
      </S.Second>
      <S.Third>
        <S.SlideList>
          <S.Slide>
            <S.Title>
              추천을 위한
              <br />
              예리한 질문들
            </S.Title>
            <Button size="lg">추천 받기</Button>

            <S.SlideImg
              src={slide2}
              alt="슬라이드 이미지"
            />
          </S.Slide>

          <S.Slide>
            <S.Title>
              루틴도
              <br />한 번에 관리하세요
            </S.Title>
            <Button size="lg">루틴 관리</Button>

            <S.SlideImg
              src={slide}
              alt="슬라이드 이미지"
            />
          </S.Slide>
        </S.SlideList>
        <S.TabListWrapper>
          <S.TabBackground
            initial={false}
            animate={{ x: selectedSlideNum * 100 + "%" }}
            transition={{ type: "tween", duration: 0.2 }}></S.TabBackground>
          <S.TabList>
            {TABS.map(({ title, id }) => (
              <S.TabButton
                key={id}
                onClick={() => handleSlideNum(id)}
                className={selectedSlideNum === id ? "active" : ""}>
                {selectedSlideNum === id && <Icon icon="CircleEmptyBlue" />}
                {title}
              </S.TabButton>
            ))}
          </S.TabList>
        </S.TabListWrapper>
      </S.Third>
      <S.HomeContent>
        <section
          className="fourthContent"
          name="link">
          <div className="fourthTitle">
            <span className="fourthTitleText">핏메이트,</span>
            <span className="fourthTitleText">이런 서비스도 있어요.</span>
          </div>
          <div className="fourthBody">
            <S.FourthBodyItem>
              <div className="itemLogo">
                <img src={fourthFirstImg} />
              </div>
              <div className="itemText">
                <span className="itemTextTitle">운동 가이드 영상</span>
                <p className="itemTextContent">
                  정확한 운동 자세, 방법 등
                  <br />
                  운동 강의 영상을 제공해요.
                </p>
              </div>
            </S.FourthBodyItem>
            <S.FourthBodyItem>
              <div className="itemLogo">
                <img src={fourthThirdImg} />
              </div>
              <div className="itemText">
                <span className="itemTextTitle">개인 맞춤형 가이드</span>
                <p className="itemTextContent">
                  개인 맞춤형
                  <br />
                  운동량 수정이 가능해요.
                </p>
              </div>
            </S.FourthBodyItem>
          </div>
        </section>
      </S.HomeContent>
      <S.HomeContent>
        <section className="fifthContent">
          <div className="fifthTitle">
            <p className="fifthFirstText">모든 정보가 한 눈에</p>
            <span className="fifthSecondText">운동, 보조제 정보 검색</span>
          </div>
          <button
            className="searchBtn"
            onClick={handleSearch}>
            <span className="searchBtnText">검색 바로 가기</span>
            <img
              className="searchBtnImg"
              // src={arrow}
              alt="검색 바로 가기 버튼"
            />
          </button>
        </section>
      </S.HomeContent>
      {isLoginModal && <LoginModal setIsLoginModal={setIsLoginModal} />}
    </S.HomeContainer>
  )
}

export default Home
