import { useState } from "react"

export const useSelectMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState(-1)

  const handleSelectMenu = (idx) => {
    setSelectedMenu(idx)
  }

  return { selectedMenu, setSelectedMenu, handleSelectMenu }
}
