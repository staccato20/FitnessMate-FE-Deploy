import { instance } from "@apis/instance"

import { GetBodyParts } from "../../types/type"

const fetchData = () =>
  instance.get<GetBodyParts>(`/api/bodyParts/all`).then((res) => res.data)

const bodyPartAPI = {
  fetchData,
}

export default bodyPartAPI
