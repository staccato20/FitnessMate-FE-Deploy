import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { useUserStore } from "@store/useUserStore"

import Footer from "@components/Footer/Footer"
import Navbar from "@components/Navbar/Navbar"
import { ScrollToTop } from "@components/ScrollToTop/ScrollToTop"

const MainLayout = () => {
  const location = useLocation()
  const path = location.pathname
  const isRecommend = path.includes("recommend")
  const isLogin = path.includes("login")
  const isSignup = path.includes("signup")
  const isMyPage = path.includes("mypage")
  const { checkLogin } = useUserStore()

  useEffect(() => {
    checkLogin()
  }, [location, path, checkLogin])

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      {!isRecommend && !isLogin && !isSignup && !isMyPage && <Footer />}
    </>
  )
}

export default MainLayout
