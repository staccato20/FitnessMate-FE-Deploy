import { useQuery } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

export const useGetUser = () => {
  return useQuery({
    queryKey: ["useGetUser"],
    queryFn: async () => await authAPI.fetchUser(),
  }).data
}
