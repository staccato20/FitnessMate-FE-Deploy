import { Suspense, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

import { AnimatePresence } from "framer-motion"

import CardSkeleton from "@components/Card/CardSkeleton"

import DropdownForm from "@pages/Search/DropdownForm"
import Pagination from "@pages/Search/Pagination"

import { SearchTypes } from "@typpes/type"

import { useGetBodyPart } from "@hooks/query/useGetBodyPart"

import CardList from "./CardList"
import * as S from "./StyledSearch"
import TabList from "./TabList"

const Search = () => {
  const navigate = useNavigate()
  const { pageId } = useParams()

  const methods = useForm<SearchTypes>()

  const { bodyParts = [] } = useGetBodyPart()

  const [isSearchMode, setIsSearchMode] = useState(false)
  const [keyword, setKeyword] = useState("")
  const [activeTab, setActiveTab] = useState(0)

  const handleToggle = () => {
    setIsSearchMode(!isSearchMode)
    methods.setFocus("search")
    setKeyword("")
  }

  const handleSearch = ({ search }: SearchTypes) => {
    setKeyword(search)
  }

  const handleTabChange = (index: number) => {
    if (!bodyParts) {
      return
    }
    setActiveTab(index)
    navigate(`/searchworkout/1`)
    setKeyword("")
    methods.reset()
  }

  return (
    <S.SearchWrapper>
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

        <Suspense fallback={<CardSkeleton />}>
          <CardList
            bodyParts={bodyParts}
            pageId={Number(pageId)}
            keyword={keyword}
            activeTab={activeTab}
            isSearchMode={isSearchMode}
          />
        </Suspense>
        <Pagination pageId={Number(pageId)} />
      </S.SearchContent>
    </S.SearchWrapper>
  )
}

export default Search
