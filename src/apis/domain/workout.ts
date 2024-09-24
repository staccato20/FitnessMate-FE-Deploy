import { instance } from "@apis/instance"

import { GetWorkoutsPayload, GetWorkoutsResponse } from "@typpes/type"

const fetchData = (workoutId: number) =>
  instance.get(`/api/workouts/${workoutId}`)

const searchBatchData = ({
  page,
  searchKeyword,
  bodyPartKoreanName,
}: GetWorkoutsPayload) => {
  const params = { searchKeyword, bodyPartKoreanName }
  return instance.post<GetWorkoutsResponse[]>(
    `/api/workouts/search/list/${page}`,
    params,
  )
}

const workoutAPI = {
  fetchData,
  searchBatchData,
}
export default workoutAPI
