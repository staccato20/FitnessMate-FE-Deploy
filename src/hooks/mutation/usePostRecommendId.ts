import { useNavigate } from "react-router-dom"

import { useMutation } from "@tanstack/react-query"

import recommendAPI from "@apis/domain/recommend"

import { PostRecommendIdPayload } from "@typpes/type"

import { usePostRecommend } from "@hooks/mutation/usePostRecommend"

export const usePostRecommendId = () => {
  const { mutate: postRecommend } = usePostRecommend()
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ["usePostRecommendId"],
    mutationFn: async (payload: PostRecommendIdPayload) => {
      return await recommendAPI.workoutId(payload)
    },
    onSuccess: (workoutRecommendationId) => {
      postRecommend(workoutRecommendationId, {
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
        },
      })
    },
    onError: () => {
      console.error("에러")
    },
  })
}
