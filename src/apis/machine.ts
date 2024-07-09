import { instance } from "@apis/API"

interface MachinesListParams {
  bodyPartKoreanName: []
}
const fetchList = (bodyPartList: MachinesListParams) =>
  instance.post("/api/machines/list", bodyPartList)

const machine = { fetchList }
export default machine
