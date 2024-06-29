import { Route, Routes } from "react-router-dom"

import FixBodyInfo from "@pages/MyPage/Fix/FixBodyInfo"
import FixProfile from "@pages/MyPage/Fix/FixProfile"
import { FixPassword } from "@pages/MyPage/Fix/StyledFix"

const Mypage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MypageHome />}
      />
      <Route
        path="fixprofile"
        element={<FixProfile />}
      />
      <Route
        path="fixpassword"
        element={<FixPassword />}
      />
      <Route
        path="fixbodyinfo"
        element={<FixBodyInfo />}
      />
    </Routes>
  )
}

export default Mypage
