import { useQuery } from "@tanstack/react-query"

import workoutAPI from "@apis/domain/workout"

export const useGetWorkout = () => {
  const getWorkout = useQuery({
    queryKey: ["getWorkout"],
    queryFn: async () =>
      await workoutAPI.searchBatchData({
        page: 1,
        searchKeyword: "",
        bodyPartKoreanName: [],
      }),
  })

  return { workouts: getWorkout.data }
}
