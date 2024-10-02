import { keepPreviousData, useQuery } from "@tanstack/react-query"

import workoutAPI from "@apis/domain/workout"

import { GetWorkoutsPayload } from "@typpes/type"

export const useGetWorkout = ({
  page = 1,
  searchKeyword = "",
  bodyPartKoreanName = [],
}: GetWorkoutsPayload) => {
  const getWorkout = useQuery({
    queryKey: ["getWorkout", page, searchKeyword, bodyPartKoreanName],
    queryFn: async () =>
      await workoutAPI.searchBatchData({
        page,
        searchKeyword,
        bodyPartKoreanName,
      }),
    placeholderData: keepPreviousData,
  })

  return { workouts: getWorkout.data }
}
