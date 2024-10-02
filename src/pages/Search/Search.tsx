import { useState } from "react"
import { useParams } from "react-router-dom"

import Card from "@components/Card/Card"
import Icon from "@components/Icon/Icon"
import Tabs from "@components/Tabs/Tabs"

import { useGetBodyPart } from "@pages/Search/hooks/useGetBodyPart"
import { useGetWorkout } from "@pages/Search/hooks/useGetWorkout"

import * as S from "./StyledSearch"

const Search = () => {
  const { bodyParts = [] } = useGetBodyPart()
  const [activeTab, setActiveTab] = useState(0)
  const { pageId } = useParams()

  const handleTabChange = (index: number) => {
    if (!bodyParts) {
      return
    }
    setActiveTab(index)
  }

  const { workouts } = useGetWorkout({
    page: Number(pageId),
    searchKeyword: "",
    bodyPartKoreanName:
      activeTab === 0 ? [] : [bodyParts[activeTab].koreanName],
  })

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
                  badges={bodyPartKoreanName}></Card>
              ),
            )}
          </S.CardList>
        </S.CardWrapper>
      </S.SearchContent>
    </S.SearchWrapper>
  )
}

export default Search
