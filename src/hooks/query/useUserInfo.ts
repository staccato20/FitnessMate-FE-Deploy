import { useQuery } from "@tanstack/react-query"

import authAPI from "../../apis/domain/auth"

export const useUserInfo = () => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => await authAPI.fetchUser(),
  })
}
