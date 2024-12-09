import { useNavigate } from "react-router-dom"

import { useMutation } from "@tanstack/react-query"

import recommendAPI from "@apis/domain/recommend"

export const usePostRecommend = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ["usePostRecommendId"],
    mutationFn: async (workoutRecommendId: number) =>
      recommendAPI.workoutHistory(workoutRecommendId),
    retry: 120,
    retryDelay: 1000 * 1,

    onError: () => {
      console.error("에러")
    },
    onSuccess: (result) => {
      const seenWorkoutIds = new Set()

      result.recommends = result.recommends.filter((recommend) => {
        if (seenWorkoutIds.has(recommend.workoutId)) {
          return false
        } else {
          seenWorkoutIds.add(recommend.workoutId)
          return true
        }
      })
      navigate("/recommend/result", { state: result })

      document.body.style.overflow = "auto"
    },
    onMutate: () => {
      document.body.style.overflow = "hidden"
    },
  })
}
