import { startTransition, useState } from "react"
import { useForm } from "react-hook-form"

import { AnimatePresence } from "framer-motion"

import Icon from "@components/Icon/Icon"
import { useTabs } from "@components/Tabs/TabsContext"

import DropdownForm from "@pages/Search/DropdownForm"
import Pagination from "@pages/Search/Pagination"

import { SearchTypes } from "@typpes/type"

import { useGetBodyPart } from "@hooks/query/useGetBodyPart"

import * as S from "./StyledSearch"
import TabList from "./TabList"

const Search = () => {
  const methods = useForm<SearchTypes>()

  const { bodyParts = [] } = useGetBodyPart()

  const [isSearchMode, setIsSearchMode] = useState(false)
  const [keyword, setKeyword] = useState("")
  const { switchTab } = useTabs()
  const [currentPage, setCurrentPage] = useState(1)

  const handleToggle = () => {
    setIsSearchMode(!isSearchMode)
    methods.setFocus("search")
    setKeyword("")
  }

  const handleSearch = ({ search }: SearchTypes) => {
    setKeyword(search)
    setCurrentPage(1)
    switchTab(0)
  }

  const handleTabChange = (index: number) => {
    if (!bodyParts) {
      return
    }
    startTransition(() => {
      switchTab(index)
      setCurrentPage(1)
      setKeyword("")
      methods.reset()
    })
  }

  const handlePage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <S.SearchWrapper id="top">
      {isSearchMode && <S.BackOverlay />}
      <S.TitleWrapper>
        <S.Title>나에게 핏한</S.Title>
        <S.SubTitle>운동과 보조제를 검색해보세요</S.SubTitle>
      </S.TitleWrapper>
      <S.SearchContent>
        <S.NavTab>
          <S.NavTabInner>
            <TabList
              handleTabChange={handleTabChange}
              bodyParts={bodyParts}
              currentPage={currentPage}
              keyword={keyword}
              isSearchMode={isSearchMode}
            />
            <S.SearchToggle onClick={handleToggle}>
              <Icon
                icon="Search"
                size={26}
              />
              운동 이름으로 검색
            </S.SearchToggle>
          </S.NavTabInner>
        </S.NavTab>
        <AnimatePresence>
          {isSearchMode && (
            <DropdownForm
              methods={methods}
              handleSearch={handleSearch}
              handleToggle={handleToggle}
            />
          )}
        </AnimatePresence>

        <Pagination
          currentPage={currentPage}
          handlePage={handlePage}
          isShow={isSearchMode && keyword !== ""}
        />
      </S.SearchContent>
    </S.SearchWrapper>
  )
}

export default Search
