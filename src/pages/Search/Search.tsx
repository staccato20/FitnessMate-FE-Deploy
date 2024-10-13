import { Suspense, startTransition, useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-scroll"

import { AnimatePresence } from "framer-motion"

import CardSkeleton from "@components/Card/CardSkeleton"
import DeferredComponent from "@components/Deferred/DeferredComponent"

import DropdownForm from "@pages/Search/DropdownForm"
import Pagination from "@pages/Search/Pagination"

import { SearchTypes } from "@typpes/type"

import { useGetBodyPart } from "@hooks/query/useGetBodyPart"

import CardList from "./CardList"
import * as S from "./StyledSearch"
import TabList from "./TabList"

const Search = () => {
  const methods = useForm<SearchTypes>()

  const { bodyParts = [] } = useGetBodyPart()

  const [isSearchMode, setIsSearchMode] = useState(false)
  const [keyword, setKeyword] = useState("")
  const [activeTab, setActiveTab] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const handleToggle = () => {
    setIsSearchMode(!isSearchMode)
    methods.setFocus("search")
    setKeyword("")
  }

  const handleSearch = ({ search }: SearchTypes) => {
    setKeyword(search)
    setCurrentPage(1)
    setActiveTab(0)
  }

  const handleTabChange = (index: number) => {
    if (!bodyParts) {
      return
    }
    startTransition(() => {
      setActiveTab(index)
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
        <TabList
          handleTabChange={handleTabChange}
          handleToggle={handleToggle}
          bodyParts={bodyParts}
          activeTab={activeTab}
        />

        <AnimatePresence>
          {isSearchMode && (
            <DropdownForm
              methods={methods}
              handleSearch={handleSearch}
              handleToggle={handleToggle}
            />
          )}
        </AnimatePresence>

        <Suspense
          fallback={
            <DeferredComponent>
              <CardSkeleton />
            </DeferredComponent>
          }>
          <CardList
            bodyParts={bodyParts}
            currentPage={currentPage}
            keyword={keyword}
            activeTab={activeTab}
            isSearchMode={isSearchMode}
          />
        </Suspense>
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
