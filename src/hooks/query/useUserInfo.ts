import { useQuery } from "@tanstack/react-query"

import authAPI from "@apis/auth"

import { fetchUserProps } from "../../apis/auth"

export const useUserInfo = () => {
  return useQuery<fetchUserProps>({
    queryKey: ["userInfo"],
    queryFn: async () => await authAPI.fetchUser(),
  })
}
