import { useUserStore } from "@store/useUserStore"

import { useQuery } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

export const useGetUserInfo = () => {
  const { saveUser } = useUserStore()
  const userInfo = useQuery({
    queryKey: ["USERINFO"],
    queryFn: () =>
      authAPI.fetchUser().then((res) => {
        saveUser(res)
      }),
  })

  return { userInfo: userInfo.data }
}
