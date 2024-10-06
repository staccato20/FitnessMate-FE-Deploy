import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { AnimatePresence } from "framer-motion"

import Card from "@components/Card/Card"
import Chip from "@components/Chip/Chip"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import Tabs from "@components/Tabs/Tabs"

import { useGetBodyPart } from "@hooks/query/useGetBodyPart"
import { useGetWorkoutBatch } from "@hooks/query/useGetWorkoutBatch"

import { animation } from "@styles/theme"

import * as S from "./StyledSearch"

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
  }

  const { workouts } = useGetWorkoutBatch({
    page: Number(pageId),
    searchKeyword: "",
    bodyPartKoreanName:
      activeTab === 0 ? [] : [bodyParts[activeTab].koreanName],
  })

  const handleCard = (workoutId: number) => {
    navigate(`/workoutdetail/${workoutId}`)
  }

  const handleToggle = () => {
    setIsSearchMode(!isSearchMode)
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
              animate={{ height: "408px", opacity: 1, gap: "0" }}
              exit={{ height: 0, opacity: 0 }}
              transition={animation.basic}>
              <IconButton
                icon="CloseBold"
                className="close"
                onClick={handleToggle}
              />
              <S.DropDownKeywordWrapper>
                <S.DropDownKeywordTitle>
                  추천 검색 키워드
                </S.DropDownKeywordTitle>
                <S.DropDownKeywordList>
                  {["마이 프로틴", "BCAA"].map((keyword) => (
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
      </S.SearchContent>
    </S.SearchWrapper>
  )
}

export default Search
