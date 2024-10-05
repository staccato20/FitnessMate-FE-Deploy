import { instance } from "@apis/instance"

import { GetWorkoutsPayload, Recommend } from "@typpes/type"

const fetchData = (workoutId: number) =>
  instance.get(`/api/workouts/${workoutId}`)

const searchBatchData = ({
  page,
  searchKeyword,
  bodyPartKoreanName,
}: GetWorkoutsPayload) => {
  const params = { searchKeyword, bodyPartKoreanName }
  return instance
    .post<Recommend[]>(`/api/workouts/search/list/${page}`, params)
    .then((res) => res.data)
}

const workoutAPI = {
  fetchData,
  searchBatchData,
}
export default workoutAPI
