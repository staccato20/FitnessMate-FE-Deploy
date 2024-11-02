import { useMutation } from "@tanstack/react-query"

import MyFitAPI from "@apis/domain/myfit"

import { RoutineInfo } from "@typpes/type"

interface usePostAddRoutineProps {
  routineId: number
  routineInfo: RoutineInfo
}

export const usePostAddRoutine = () => {
  return useMutation({
    mutationKey: ["usePostAddRoutine"],
    mutationFn: async ({ routineId, routineInfo }: usePostAddRoutineProps) =>
      MyFitAPI.addRoutine(routineInfo, routineId),
    onError: () => {
      console.log("에러")
    },
  })
}
