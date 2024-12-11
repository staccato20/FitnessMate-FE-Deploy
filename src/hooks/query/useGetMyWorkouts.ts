import { useQuery } from "@tanstack/react-query"

import { MyWorkoutList } from "@typpes/type"

import MyFitAPI from "../../apis/domain/myfit"

export const useGetMyWorkouts = (routineId: number) => {
  const query = useQuery<MyWorkoutList[]>({
    queryKey: ["workoutList", routineId],
    queryFn: async () => {
      const response = await MyFitAPI.myWorkouts(routineId)
      return Array.isArray(response) ? response : []
    },
    enabled: !!routineId,
  })

  return {
    ...query,
    myWorkouts: query.data || [],
    isWorkout: query.data && query.data.length > 0,
  }
}

export default useGetMyWorkouts
