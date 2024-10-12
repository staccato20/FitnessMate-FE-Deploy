import { useRef } from "react"

import Icon from "@components/Icon/Icon"
import Tabs from "@components/Tabs/Tabs"

import { BodyPartList } from "@typpes/type"

import { useScroll } from "@hooks/useScroll"

import * as S from "./StyledSearch"

interface TabListProps {
  handleTabChange: (index: number) => void
  handleToggle: () => void
  bodyParts: BodyPartList[]
  activeTab: number
}

const TabList = ({
  handleTabChange,
  handleToggle,
  bodyParts,
  activeTab,
}: TabListProps) => {
  const { position } = useScroll()
  const targetRef = useRef<HTMLDivElement>(null)
  const targetHeight = targetRef.current
    ? targetRef.current?.getBoundingClientRect().top -
      targetRef.current?.clientHeight
    : -1

  const isTabFixed = position > targetHeight

  return (
    <S.TabsWrapper
      $isTabFixed={isTabFixed}
      ref={targetRef}>
      <S.TabsBox>
        <Tabs
          activeTab={activeTab}
          onTabChange={handleTabChange}>
          <Tabs.TabList>
            {bodyParts?.map(({ koreanName, bodyPartId }) => (
              <Tabs.Tab
                key={bodyPartId}
                index={bodyPartId}
                variant="fill"
                onTabChange={handleTabChange}>
                {koreanName}
              </Tabs.Tab>
            ))}
          </Tabs.TabList>
        </Tabs>
        <S.SearchToggle onClick={handleToggle}>
          <Icon icon="Search" />
          운동 이름으로 검색
        </S.SearchToggle>
      </S.TabsBox>
    </S.TabsWrapper>
  )
}

export default TabList
