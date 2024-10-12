import { createContext, useContext } from "react"

import { StrictPropsWithChildren } from "@typpes/type"

const DEFAULT_INDEX = 0

const TabsContext = createContext({
  activeTab: DEFAULT_INDEX,
  switchTab: (_tabIndex: number) => {},
})

const useTabs = () => useContext(TabsContext)

interface TabsProviderProps {
  activeTab: number
  onTabChange: (index: number) => void
}

const TabsProvider = ({
  children,
  activeTab,
  onTabChange,
}: StrictPropsWithChildren<TabsProviderProps>) => {
  const switchTab = (tabIndex: number) => {
    onTabChange(tabIndex)
  }

  return (
    <TabsContext.Provider value={{ activeTab, switchTab }}>
      {children}
    </TabsContext.Provider>
  )
}

export { TabsProvider, useTabs }
