import { useMutation } from "@tanstack/react-query"

import MyFitAPI from "@apis/domain/myfit"

import { MyRoutines } from "@typpes/type"

export const usePostMakeRoutine = () => {
  return useMutation({
    mutationKey: ["usePostMakeRoutine"],
    mutationFn: async (params: { routines: MyRoutines[] }) =>
      await MyFitAPI.modifyMyRoutine(params),
  })
}
