import { Suspense } from "react"

import CardSkeleton from "@components/Card/CardSkeleton"
import DeferredComponent from "@components/Deferred/DeferredComponent"
import Tabs from "@components/Tabs/Tabs"

import CardList from "@pages/Search/CardList"

import { BodyPartList } from "@typpes/type"

interface TabListProps {
  bodyParts: BodyPartList[]
  currentPage: number
  isSearchMode: boolean
  keyword: string
}

const TabList = ({
  bodyParts,
  currentPage,
  isSearchMode,
  keyword,
}: TabListProps) => {
  return (
    <Tabs>
      <Tabs.TabList>
        {bodyParts?.map(({ koreanName, bodyPartId }) => (
          <Tabs.Tab
            key={bodyPartId}
            index={bodyPartId}
            variant="fill">
            {koreanName}
          </Tabs.Tab>
        ))}
      </Tabs.TabList>
      <Tabs.TabPanels>
        {bodyParts?.map(({ koreanName, bodyPartId }) => (
          <Tabs.TabPanel
            index={bodyPartId}
            key={bodyPartId}>
            <Suspense
              fallback={
                <DeferredComponent>
                  <CardSkeleton />
                </DeferredComponent>
              }>
              <CardList
                currentPage={currentPage}
                keyword={keyword}
                koreanName={koreanName}
                isSearchMode={isSearchMode}
              />
            </Suspense>
          </Tabs.TabPanel>
        ))}
      </Tabs.TabPanels>
    </Tabs>
  )
}

export default TabList
