import { useQuery } from "@tanstack/react-query"

import MyFitAPI from "../../apis/domain/myfit"

export const useGetMyWorkouts = (routineId: number) => {
  return useQuery({
    queryKey: ["getMyWorkouts", routineId],
    queryFn: async () => {
      const response = await MyFitAPI.myWorkouts(routineId)
      return Array.isArray(response) ? response : []
    },
    enabled: !!routineId, // routineId가 있을 때만 실행
  })
}
