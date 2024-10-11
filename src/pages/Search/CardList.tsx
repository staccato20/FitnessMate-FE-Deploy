import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Card from "@components/Card/Card"

import { usePageNumStore } from "@pages/Search/store/usePageNumStore"

import { BodyPartList } from "@typpes/type"

import { useGetWorkoutBatch } from "@hooks/query/useGetWorkoutBatch"

import * as S from "./StyledSearch"

interface CardListProps {
  currentPage: number
  isSearchMode: boolean
  activeTab: number
  keyword: string
  bodyParts: BodyPartList[]
}

const CardList = ({
  currentPage,
  isSearchMode,
  activeTab,
  keyword,
  bodyParts,
}: CardListProps) => {
  const navigate = useNavigate()
  const { workouts, pageNum } = useGetWorkoutBatch({
    page: currentPage,
    searchKeyword: isSearchMode ? keyword : "",
    bodyPartKoreanName:
      activeTab === 0 ? [] : [bodyParts[activeTab].koreanName],
  })

  console.log(pageNum)

  const handleCard = (workoutId: number) => {
    navigate(`/workoutdetail/${workoutId}`)
  }

  const { setPageNum } = usePageNumStore()

  useEffect(() => {
    setPageNum(pageNum)
  }, [activeTab, currentPage, keyword])

  const isShow = isSearchMode && keyword !== ""

  return (
    <S.CardWrapper $isShow={isShow}>
      {isShow && (
        <S.CardSearchTitle>
          '{keyword}'이 포함된 검색 결과 {workouts.length}개를 찾았어요.
        </S.CardSearchTitle>
      )}
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
