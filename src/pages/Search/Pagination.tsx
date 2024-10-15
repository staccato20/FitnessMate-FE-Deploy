import { Link } from "react-scroll"

import IconButton from "@components/IconButton/IconButton"

import { usePageNumStore } from "@pages/Search/store/usePageNumStore"

import * as S from "./StyledSearch"

interface PaginationProps {
  currentPage: number
  handlePage: (page: number) => void
  isShow: boolean
}

const Pagination = ({ currentPage, handlePage, isShow }: PaginationProps) => {
  const handleNextPage = () => {
    handlePage(currentPage + 1)
  }
  const handlePreviousPage = () => {
    handlePage(currentPage - 1)
  }

  const { pageNum } = usePageNumStore()

  return (
    <S.PaginationWrapper $isShow={isShow}>
      <IconButton
        icon="LeftArrowBig"
        size={11}
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      />
      <S.PaginationList>
        {Array.from({ length: pageNum }, (_, i: number) => i + 1).map(
          (page) => (
            <Link
              to="top"
              spy={true}
              smooth={true}>
              <S.PaginationButton
                key={page}
                $isSelected={currentPage === page}
                onClick={() => handlePage(page)}>
                {page}
              </S.PaginationButton>
            </Link>
          ),
        )}
      </S.PaginationList>
      <IconButton
        icon="RightArrowBig"
        size={11}
        onClick={handleNextPage}
        disabled={currentPage === pageNum}
      />
    </S.PaginationWrapper>
  )
}

export default Pagination
