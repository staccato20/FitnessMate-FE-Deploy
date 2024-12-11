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

  const isWorkout = (query.data && query.data.length > 0) || false

  return {
    myWorkouts: query.data || [],
    isWorkout,
    refetch: query.refetch,
  }
}

export default useGetMyWorkouts
