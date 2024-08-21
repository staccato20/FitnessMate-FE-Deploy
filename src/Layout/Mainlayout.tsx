import { Outlet } from "react-router-dom"

import { MainLayoutWrapper } from "@Layout/StyledMainLayout"

import Navbar from "@components/Navbar/Navbar"

const MainLayout = () => {
  return (
    <MainLayoutWrapper>
      <Navbar />
      <Outlet />
    </MainLayoutWrapper>
  )
}

export default MainLayout
