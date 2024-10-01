// import { useLocation } from "react-router-dom"
import Icon from "@components/Icon/Icon"
import Tabs from "@components/Tabs/Tabs"

import { useGetBodyPart } from "@pages/Search/hooks/useGetBodyPart"

import * as S from "./StyledSearch"

const Search = () => {
  // const location = useLocation()
  // const keyword = location.state?.keyword
  const { bodyParts } = useGetBodyPart()

  return (
    <S.SearchWrapper>
      <S.SearchContent>
        <S.TitleWrapper>
          <S.Title>나에게 핏한</S.Title>
          <S.SubTitle>운동과 보조제를 검색해보세요</S.SubTitle>
        </S.TitleWrapper>
        <S.TabsWrapper>
          <Tabs>
            <Tabs.TabList>
              {bodyParts?.map(({ koreanName }, index) => (
                <Tabs.Tab
                  index={index}
                  variant="fill"
                  key={koreanName}>
                  {koreanName}
                </Tabs.Tab>
              ))}
            </Tabs.TabList>
          </Tabs>
          <S.SearchBar>
            <Icon icon="Search" />
            운동 이름으로 검색
          </S.SearchBar>
        </S.TabsWrapper>
        <S.CardWrapper>
          <S.CardTitle>전체{}</S.CardTitle>
          <S.CardList>
            {/* <Tabs.TabPanel
              index={1}
              key={1}></Tabs.TabPanel> */}
          </S.CardList>
        </S.CardWrapper>
      </S.SearchContent>
    </S.SearchWrapper>
  )
}

export default Search
