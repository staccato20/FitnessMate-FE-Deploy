import { useState } from "react"

export const useSelectMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState(-1)

  const handleSelectMenu = (idx: number) => {
    setSelectedMenu(idx)
  }

  return { selectedMenu, handleSelectMenu }
}
