import { useSuspenseQuery } from "@tanstack/react-query"

import workoutAPI from "@apis/domain/workout"

import { GetWorkoutsPayload } from "@typpes/type"

export const useGetWorkoutBatch = ({
  page = 1,
  searchKeyword = "",
  bodyPartKoreanName = [],
}: GetWorkoutsPayload) => {
  const getWorkout = useSuspenseQuery({
    queryKey: ["getWorkoutBatch", page, searchKeyword, bodyPartKoreanName],
    queryFn: async () =>
      await workoutAPI.searchBatchData({
        page,
        searchKeyword,
        bodyPartKoreanName,
      }),
  })

  return {
    workouts: getWorkout.data,
    isFetching: getWorkout.isFetching,
  }
}
