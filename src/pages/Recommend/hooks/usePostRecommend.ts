import { useMutation } from "@tanstack/react-query"

import recommendAPI from "@apis/domain/recommend"

const usePostRecommend = () => {
  const postRecommend = useMutation({
    mutationKey: ["postRecommend"],
    mutationFn: (bodyPartKoreanName: string[]) =>
      recommendAPI.workoutId({ bodyPartKoreanName }),
    onSuccess: (response) => {
      console.log(response)
    },

    onError: () => {
      console.log("에러")
    },
  })

  return { postRecommend }
}

export default usePostRecommend
