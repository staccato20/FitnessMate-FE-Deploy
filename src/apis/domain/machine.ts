import { instance } from "@apis/instance"

import { MachineList, PostMachineListPayload } from "@typpes/type"

const fetchList = (bodyPartList: PostMachineListPayload) =>
  instance.post<MachineList[]>("/api/machines/list", bodyPartList)

const machineAPI = { fetchList }
export default machineAPI
