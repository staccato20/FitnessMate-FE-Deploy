import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Card from "@components/Card/Card"

import { usePageNumStore } from "@pages/Search/store/usePageNumStore"

import { BodyPartList } from "@typpes/type"

import { useGetWorkoutBatch } from "@hooks/query/useGetWorkoutBatch"

import * as S from "./StyledSearch"

interface CardListProps {
  pageId: number
  isSearchMode: boolean
  activeTab: number
  keyword: string
  bodyParts: BodyPartList[]
}

const totalPageLength = 4

const CardList = ({
  pageId,
  isSearchMode,
  activeTab,
  keyword,
  bodyParts,
}: CardListProps) => {
  const navigate = useNavigate()
  const { workouts } = useGetWorkoutBatch({
    page: Number(pageId),
    searchKeyword: isSearchMode ? keyword : "",
    bodyPartKoreanName:
      activeTab === 0 ? [] : [bodyParts[activeTab].koreanName],
  })

  const handleCard = (workoutId: number) => {
    navigate(`/workoutdetail/${workoutId}`)
  }

  const { setPageNum } = usePageNumStore()

  useEffect(() => {
    setPageNum(
      activeTab === 0 ? totalPageLength : Math.ceil(workouts?.length / 12),
    )
  }, [activeTab, pageId, keyword])

  return (
    <S.CardWrapper>
      <S.CardList>
        {workouts?.map(({ id, imgPath, koreanName, bodyPartKoreanName }) => (
          <Card
            key={id}
            src={imgPath}
            title={koreanName}
            badges={bodyPartKoreanName}
            onClick={() => handleCard(id)}
          />
        ))}
      </S.CardList>
    </S.CardWrapper>
  )
}

export default CardList
