import Tabs from "@components/Tabs/Tabs"

import { BodyPartList } from "@typpes/type"

interface TabListProps {
  handleTabChange: (index: number) => void
  bodyParts: BodyPartList[]
  activeTab: number
}

const TabList = ({ handleTabChange, bodyParts, activeTab }: TabListProps) => {
  return (
    <Tabs
      activeTab={activeTab}
      onTabChange={handleTabChange}>
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
    </Tabs>
  )
}

export default TabList
