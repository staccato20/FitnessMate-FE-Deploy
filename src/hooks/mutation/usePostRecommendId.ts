import { useMutation } from "@tanstack/react-query"

import recommendAPI from "@apis/domain/recommend"

import { PostRecommendIdPayload } from "@typpes/type"

export const usePostRecommendId = () => {
  const postRecommendId = useMutation({
    mutationKey: ["usePostRecommendId"],
    mutationFn: async (payload: PostRecommendIdPayload) => {
      return await recommendAPI.workoutId(payload)
    },

    onError: () => {
      console.log("에러")
    },
  })

  return postRecommendId.mutate
}
