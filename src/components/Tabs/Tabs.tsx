import Tab from "@components/Tab/Tab"
import { TabPanelsWrapper, TabsListWrapper } from "@components/Tabs/StyledTabs"
import { TabsProvider, useTabs } from "@components/Tabs/TabsContext"

import { StrictPropsWithChildren } from "@typpes/type"

interface TabPanelProps {
  index: number
}

interface TabsProps {
  activeTab: number
  onTabChange: (index: number) => void
}

const Tabs = ({
  children,
  activeTab,
  onTabChange,
}: StrictPropsWithChildren<TabsProps>) => (
  <TabsProvider
    activeTab={activeTab}
    onTabChange={onTabChange}>
    <>{children}</>
  </TabsProvider>
)

const TabList = ({ children }: StrictPropsWithChildren) => (
  <TabsListWrapper>{children}</TabsListWrapper>
)

const TabPanels = ({ children }: StrictPropsWithChildren) => (
  <TabPanelsWrapper>{children}</TabPanelsWrapper>
)

const TabPanel = ({
  children,
  index,
}: StrictPropsWithChildren<TabPanelProps>) => {
  const { activeTab } = useTabs()
  return index === activeTab ? children : null
}

Tabs.TabList = TabList
Tabs.TabPanel = TabPanel
Tabs.TabPanels = TabPanels
Tabs.Tab = Tab

export default Tabs
