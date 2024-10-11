import IconButton from "@components/IconButton/IconButton"

import { usePageNumStore } from "@pages/Search/store/usePageNumStore"

import * as S from "./StyledSearch"

interface PaginationProps {
  currentPage: number
  handlePage: (page: number) => void
}

const Pagination = ({ currentPage, handlePage }: PaginationProps) => {
  const handleNextPage = () => {
    handlePage(currentPage + 1)
  }

  const handlePreviousPage = () => {
    handlePage(currentPage - 1)
  }

  const { pageNum } = usePageNumStore()

  return (
    <S.PaginationWrapper>
      <IconButton
        icon="LeftArrowBig"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      />
      <S.PaginationList>
        {Array.from({ length: pageNum }, (_, i: number) => i + 1).map(
          (page) => (
            <S.PaginationButton
              key={page}
              $isSelected={currentPage === page}
              onClick={() => handlePage(page)}>
              {page}
            </S.PaginationButton>
          ),
        )}
      </S.PaginationList>
      <IconButton
        icon="RightArrowBig"
        onClick={handleNextPage}
        disabled={currentPage === pageNum}
      />
    </S.PaginationWrapper>
  )
}

export default Pagination
