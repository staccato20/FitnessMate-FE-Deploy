import { useQuery } from "@tanstack/react-query"

import authAPI from "../../apis/domain/auth"

export const useUserInfo = () => {
  const userInfo = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => await authAPI.fetchUser(),
  })
  return { userInfo: userInfo.data }
}
