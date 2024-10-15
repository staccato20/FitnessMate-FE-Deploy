import { instance } from "@apis/instance"

import { GetWorkoutsPayload, Recommend, Workout } from "@typpes/type"

const fetchData = (workoutId: number) =>
  instance.get<Workout>(`/api/workouts/${workoutId}`).then((res) => res.data)

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
