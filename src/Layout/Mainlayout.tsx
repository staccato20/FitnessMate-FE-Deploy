import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { usePathStore } from "@store/usePathStore"

import Navbar from "@components/Navbar/Navbar"

const MainLayout = () => {
  const location = useLocation()
  const path = location.pathname
  const { setIsRecommendPage } = usePathStore()

  useEffect(() => {
    setIsRecommendPage(path)
  }, [location])

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout
