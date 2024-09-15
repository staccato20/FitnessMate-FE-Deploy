import { useMutation } from "@tanstack/react-query"

import recommendAPI from "@apis/domain/recommend"

export const usePostRecommend = () => {
  const usePostRecommend = useMutation({
    mutationKey: ["usePostRecommendId"],
    mutationFn: (workoutRecommendationId: number) =>
      recommendAPI.workoutHistory(workoutRecommendationId),
    retry: 30,
    retryDelay: 1000 * 1,

    onError: () => {
      console.log("에러")
    },
  })
  return usePostRecommend
}
