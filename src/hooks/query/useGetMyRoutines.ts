import { useQuery } from "@tanstack/react-query"

import MyFitAPI from "../../apis/domain/myfit"

export const useGetMyRoutines = () => {
  const { data: myRoutines = [] } = useQuery({
    queryKey: ["myRoutines"],
    queryFn: async () => {
      const response = await MyFitAPI.myRoutines()
      return Array.isArray(response.data) ? response.data : []
    },
  })

  return { myRoutines }
}
