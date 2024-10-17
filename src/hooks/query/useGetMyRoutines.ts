import { useQuery } from "@tanstack/react-query"

import MyFitAPI from "../../apis/domain/myfit"
import { MyRoutines } from "../../types/type"

// MyRoutines가 배열을 반환하는 경우 처리
export const useGetMyRoutines = () => {
  const { data: myRoutines = [] } = useQuery<MyRoutines[]>({
    queryKey: ["myRoutines"],
    queryFn: async () => {
      const response = await MyFitAPI.myRoutines()
      return Array.isArray(response.data) ? response.data : []
    },
  })

  return { myRoutines }
}
