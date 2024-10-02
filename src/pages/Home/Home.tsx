import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Link } from "react-scroll"

import Button from "@components/Button/Button"
import Chip from "@components/Chip/Chip"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import LoginModal from "@components/Modal/LoginModal"

import homebanner from "@assets/images/homebanner.png"
import logo from "@assets/images/logo.png"
import slide2 from "@assets/images/slide2.png"
import slide from "@assets/images/slide.png"

import { SEARCH_INPUTS } from "@pages/Home/constants/Constants"

import { useUserInfo } from "@hooks/query/useUserInfo"

import Input from "../../components/Input/Input"
import { formAdapter } from "../../utils/formAdapter"
import * as S from "./StyledHome"

type Search = {
  search: string
}

// const TABS = [
//   {
//     title: "추천 받고",
//     id: 0,
//   },
//   // {
//   //   title: "결과 보고",
//   //   id: 1,
//   // },
//   {
//     title: "루틴 까지",
//     id: 2,
//   },
// ]

export const Home = () => {
  const navigate = useNavigate()
  const { data } = useUserInfo()
  const loginState = data ? true : false

  const { register, handleSubmit, setValue, setFocus } = useForm<Search>()

  const [isLoginModal, setIsLoginModal] = useState(false)

  const handleSearch = (data: Search) => {
    navigate("searchworkout/1", { state: { keyword: data } })
  }

  const handleKeyWord = (item: string) => {
    setValue("search", item)
    setFocus("search")
  }

  const handleRecommend = () => {
    if (loginState) {
      navigate("recommend/prolog")
    } else {
      setIsLoginModal(true)
    }
  }

  const handleMyPage = () => {
    if (loginState) {
      navigate("mypage")
    } else {
      setIsLoginModal(true)
    }
  }

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
            <Button
              size="lg"
              onClick={handleRecommend}>
              추천 받기
            </Button>

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
            <Button
              size="lg"
              onClick={handleMyPage}>
              루틴 관리
            </Button>

            <S.SlideImg
              src={slide}
              alt="슬라이드 이미지"
            />
          </S.Slide>
        </S.SlideList>

        {/* <S.TabListWrapper>
          <S.TabBackground
            initial={false}
            animate={{ x: selectedSlideNum * 45 + "%" }}
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
        </S.TabListWrapper>  */}
      </S.Third>
      <S.Fourth>
        <S.SearchWrapper>
          <S.SearchTop>
            <S.SearchTitle>핏메이트가 다 알려줄게요</S.SearchTitle>
            <S.SearchSubTitle>궁금한 운동을 검색해 보세요!</S.SearchSubTitle>
          </S.SearchTop>
          <S.SearchKeywordForm onSubmit={handleSubmit(handleSearch)}>
            <S.SearchInputWrapper>
              <Input>
                <Input.Input
                  type="search"
                  props={{
                    ...formAdapter({
                      register,
                      validator: SEARCH_INPUTS["search"],
                      name: "search",
                    }),
                  }}
                />
              </Input>
              <IconButton
                icon="CloseRound"
                type="button"
                onClick={() => {
                  setValue("search", "")
                }}
              />
            </S.SearchInputWrapper>

            <S.SearchKeywordWrapper>
              <S.SearchKeywordTitle>인기 검색 키워드</S.SearchKeywordTitle>
              <S.SearchKeywordList>
                {[
                  "데드리프트",
                  "풀업",
                  "스쿼트",
                  "인클라인 덤벨 벤치프레스",
                ].map((item) => (
                  <Chip
                    key={item}
                    type="button"
                    onClick={() => handleKeyWord(item)}>
                    {item}
                  </Chip>
                ))}
              </S.SearchKeywordList>
            </S.SearchKeywordWrapper>
          </S.SearchKeywordForm>
        </S.SearchWrapper>
      </S.Fourth>
      <S.Footer>
        <S.FooterWrapper>
          <img src={logo} />
          <S.FooterInfoList>
            <S.FooterInfoContentWrapper>
              <S.FooterInfoContentList>
                <S.FooterInfoContentTitle>개발</S.FooterInfoContentTitle>
                <S.FooterInfoContent>이찬하</S.FooterInfoContent>
                <S.FooterInfoContent>정지성</S.FooterInfoContent>
                <S.FooterInfoContent>강민정</S.FooterInfoContent>
                <S.FooterInfoContent>최훈오</S.FooterInfoContent>
              </S.FooterInfoContentList>
              <S.FooterInfoContentList>
                <S.FooterInfoContentTitle>디자인</S.FooterInfoContentTitle>
                <S.FooterInfoContent>김정욱</S.FooterInfoContent>
                <S.FooterInfoContent>최시현</S.FooterInfoContent>
              </S.FooterInfoContentList>
            </S.FooterInfoContentWrapper>
            <S.FooterInfoContentList>
              <S.FooterInfoContentTitle>서비스</S.FooterInfoContentTitle>
              <S.FooterInfoContent>검색하기</S.FooterInfoContent>
              <S.FooterInfoContent>추천받기</S.FooterInfoContent>
              <S.FooterInfoContent>내 운동</S.FooterInfoContent>
            </S.FooterInfoContentList>
            <S.FooterInfoContentList>
              <S.FooterInfoContentTitle>문의</S.FooterInfoContentTitle>
              <S.FooterInfoSubContentWrapper>
                <S.FooterInfoSubContentTitle>전화</S.FooterInfoSubContentTitle>
                <S.FooterInfoContent>010-8544-1013</S.FooterInfoContent>
              </S.FooterInfoSubContentWrapper>
              <S.FooterInfoSubContentWrapper>
                <S.FooterInfoSubContentTitle>전화</S.FooterInfoSubContentTitle>
                <S.FooterInfoContent>jeuk1013@naver.com</S.FooterInfoContent>
              </S.FooterInfoSubContentWrapper>
            </S.FooterInfoContentList>
          </S.FooterInfoList>
        </S.FooterWrapper>
      </S.Footer>
      {isLoginModal && <LoginModal setIsLoginModal={setIsLoginModal} />}
    </S.HomeContainer>
  )
}

export default Home
