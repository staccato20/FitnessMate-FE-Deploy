import { useEffect } from "react"

import { useQuery } from "@tanstack/react-query"

import authAPI from "../../apis/domain/auth"
import { useUserStore } from "../../store/useUserStore"

export const useUserInfo = () => {
  const { isLogin, saveUser, logout } = useUserStore()
  const userInfo = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => await authAPI.fetchUser(),
  })

  useEffect(() => {
    if (userInfo.data) {
      saveUser(userInfo.data)
    } else {
      logout()
    }
  }, [isLogin, saveUser, logout, userInfo.data])

  return { userInfo: userInfo.data }
}
