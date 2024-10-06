import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { AnimatePresence } from "framer-motion"

import Card from "@components/Card/Card"
import Chip from "@components/Chip/Chip"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import SearchField from "@components/SearchField/SearchField"
import Tabs from "@components/Tabs/Tabs"

import { useGetBodyPart } from "@hooks/query/useGetBodyPart"
import { useGetWorkoutBatch } from "@hooks/query/useGetWorkoutBatch"

import { animation } from "@styles/theme"

import * as S from "./StyledSearch"

const totalPageLength = 4

const Search = () => {
  const [isSearchMode, setIsSearchMode] = useState(false)

  const { bodyParts = [] } = useGetBodyPart()
  const [activeTab, setActiveTab] = useState(0)
  const { pageId } = useParams()
  const navigate = useNavigate()

  const handleTabChange = (index: number) => {
    if (!bodyParts) {
      return
    }
    setActiveTab(index)
    navigate(`/searchworkout/1`)
  }

  const { workouts = [] } = useGetWorkoutBatch({
    page: Number(pageId),
    searchKeyword: "",
    bodyPartKoreanName:
      activeTab === 0 ? [] : [bodyParts[activeTab].koreanName],
  })

  const pageNum =
    activeTab === 0 ? totalPageLength : Math.ceil(workouts?.length / 12)

  const handleCard = (workoutId: number) => {
    navigate(`/workoutdetail/${workoutId}`)
  }

  const handlePagination = (pageId: number) => {
    navigate(`/searchworkout/${pageId}`)
  }

  const handleToggle = () => {
    setIsSearchMode(!isSearchMode)
  }

  const handleNextPage = () => {
    navigate(`/searchworkout/${Number(pageId) + 1}`)
  }

  const handlePreviousPage = () => {
    navigate(`/searchworkout/${Number(pageId) - 1}`)
  }

  return (
    <S.SearchWrapper>
      <S.TitleWrapper>
        <S.Title>나에게 핏한</S.Title>
        <S.SubTitle>운동과 보조제를 검색해보세요</S.SubTitle>
      </S.TitleWrapper>
      <S.SearchContent>
        <S.TabsWrapper>
          <S.TabsBox>
            <Tabs>
              <Tabs.TabList>
                {bodyParts?.map(({ koreanName }, index) => (
                  <Tabs.Tab
                    index={index}
                    variant="fill"
                    key={index}
                    onTabChange={handleTabChange}>
                    {koreanName}
                  </Tabs.Tab>
                ))}
              </Tabs.TabList>
            </Tabs>
            <S.SearchToggle onClick={handleToggle}>
              <Icon icon="Search" />
              운동 이름으로 검색
            </S.SearchToggle>
          </S.TabsBox>
        </S.TabsWrapper>
        <AnimatePresence>
          {isSearchMode && (
            <S.DropDownWrapper
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "408px", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={animation.small}>
              <IconButton
                icon="CloseBold"
                className="close"
                onClick={handleToggle}
              />
              <SearchField
                placeholder="어떤 운동이 좋을까요?"
                width="100%"
              />
              <S.DropDownKeywordWrapper>
                <S.DropDownKeywordTitle>
                  추천 검색 키워드
                </S.DropDownKeywordTitle>
                <S.DropDownKeywordList>
                  {[
                    "데드 리프트",
                    "풀업",
                    "스쿼트",
                    "인클라인 덤벨 프레스",
                  ].map((keyword) => (
                    <Chip key={keyword}>{keyword}</Chip>
                  ))}
                </S.DropDownKeywordList>
              </S.DropDownKeywordWrapper>
            </S.DropDownWrapper>
          )}
        </AnimatePresence>
        <S.CardWrapper>
          <S.CardList>
            {workouts?.map(
              ({ id, imgPath, koreanName, bodyPartKoreanName }) => (
                <Card
                  key={id}
                  src={imgPath}
                  title={koreanName}
                  badges={bodyPartKoreanName}
                  onClick={() => handleCard(id)}></Card>
              ),
            )}
          </S.CardList>
        </S.CardWrapper>
        <S.PaginationWrapper>
          <IconButton
            icon="LeftArrowBig"
            onClick={handlePreviousPage}
            disabled={Number(pageId) === 1}
          />
          <S.PaginationList>
            {Array.from({ length: pageNum }, (_, i: number) => i + 1).map(
              (item) => (
                <S.PaginationButton
                  key={item}
                  $isSelected={Number(pageId) === item}
                  onClick={() => handlePagination(item)}>
                  {item}
                </S.PaginationButton>
              ),
            )}
          </S.PaginationList>
          <IconButton
            icon="RightArrowBig"
            onClick={handleNextPage}
            disabled={Number(pageId) === totalPageLength}
          />
        </S.PaginationWrapper>
      </S.SearchContent>
    </S.SearchWrapper>
  )
}

export default Search
