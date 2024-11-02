import { useQueries } from "@tanstack/react-query"

import MyFitAPI from "@apis/domain/myfit"

import { MyRoutines } from "@typpes/type"

export const useGetRoutineQueries = (routines: MyRoutines[]) => {
  return useQueries({
    queries: routines.map(({ routineId }) => ({
      queryKey: ["getMyWorkoutsQueries", routineId],
      queryFn: () => MyFitAPI.myWorkouts(routineId),
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      }
    },
  })
}
