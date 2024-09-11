import { instance } from "@apis/instance"

import {
  PostRecommendIdPayload,
  PostRecommendIdResponse,
  PostRecommendResponse,
} from "../../types/type"

const workoutId = (params: PostRecommendIdPayload) =>
  instance.post<PostRecommendIdResponse>(`/api/recommendation/workout`, params)

const workoutHistory = (workoutRecommendationId: number) =>
  instance.get<PostRecommendResponse>(
    `/api/recommendation/workout/history/${workoutRecommendationId}`,
  )

const recommendAPI = {
  workoutId,
  workoutHistory,
}
export default recommendAPI
