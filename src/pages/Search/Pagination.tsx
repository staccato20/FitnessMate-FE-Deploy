import { useNavigate } from "react-router-dom"

import IconButton from "@components/IconButton/IconButton"

import { usePageNumStore } from "@pages/Search/store/usePageNumStore"

import * as S from "./StyledSearch"

interface PaginationProps {
  pageId: number
}

const Pagination = ({ pageId }: PaginationProps) => {
  const navigate = useNavigate()

  const handlePagination = (pageId: number) => {
    navigate(`/searchworkout/${pageId}`)
  }

  const handleNextPage = () => {
    navigate(`/searchworkout/${Number(pageId) + 1}`)
  }

  const handlePreviousPage = () => {
    navigate(`/searchworkout/${Number(pageId) - 1}`)
  }

  const { pageNum } = usePageNumStore()

  return (
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
        disabled={Number(pageId) === pageNum}
      />
    </S.PaginationWrapper>
  )
}

export default Pagination
