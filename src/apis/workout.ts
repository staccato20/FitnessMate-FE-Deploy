import { instance } from "@apis/API"

interface searchBatchDataProps {
  searchKeyword: string
  bodyPartKoreanName: string
}
interface searchBatchDataParams extends searchBatchDataProps {
  page: number
}
const fetchData = (workoutId: number) =>
  instance.get(`/api/workouts/${workoutId}`)

const searchBatchData = ({
  page,
  searchKeyword,
  bodyPartKoreanName,
}: searchBatchDataParams) => {
  const params = { searchKeyword, bodyPartKoreanName }
  return instance.post(`/api/workouts/search/list/${page}`, params)
}

const workout = {
  fetchData,
  searchBatchData,
}
export default workout
