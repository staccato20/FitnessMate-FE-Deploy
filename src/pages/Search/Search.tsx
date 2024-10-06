import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import Card from "@components/Card/Card"
import Icon from "@components/Icon/Icon"
import Tabs from "@components/Tabs/Tabs"

import { useGetBodyPart } from "@hooks/query/useGetBodyPart"
import { useGetWorkoutBatch } from "@hooks/query/useGetWorkoutBatch"

import * as S from "./StyledSearch"

const Search = () => {
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

  return (
    <S.SearchWrapper>
      <S.SearchContent>
        <S.TitleWrapper>
          <S.Title>나에게 핏한</S.Title>
          <S.SubTitle>운동과 보조제를 검색해보세요</S.SubTitle>
        </S.TitleWrapper>
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
            <S.SearchBar>
              <Icon icon="Search" />
              운동 이름으로 검색
            </S.SearchBar>
          </S.TabsBox>
        </S.TabsWrapper>
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
