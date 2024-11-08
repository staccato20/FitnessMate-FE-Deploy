import Tab from "@components/Tab/Tab"
import { TabsListWrapper } from "@components/Tabs/StyledTabs"
import { TabsProvider, useTabs } from "@components/Tabs/TabsContext"

import { StrictPropsWithChildren } from "@typpes/type"

const Tabs = ({ children }: StrictPropsWithChildren) => (
  <TabsProvider>
    <>{children}</>
  </TabsProvider>
)

const TabList = ({ children }: StrictPropsWithChildren) => (
  <TabsListWrapper>{children}</TabsListWrapper>
)

interface TabPanelProps {
  index: number
}

const TabPanels = ({ children }: StrictPropsWithChildren) => children

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
