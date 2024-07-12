import { instance } from "@apis/instance"

interface SupplementParams {
  supplementType?: string[]
  searchKeyWord?: string
}

interface fetchBatchSupplement extends SupplementParams {
  pageNum: number
}

const fetchBatchData = ({
  pageNum,
  supplementType,
  searchKeyWord,
}: fetchBatchSupplement) =>
  instance.post(`/api/supplements/list/${pageNum}`, {
    params: {
      supplementType,
      searchKeyWord,
    },
  })

const fetchData = (supplementId: number) =>
  instance.get(`/api/supplements/${supplementId}`)

const searchData = (pageNum: number) =>
  instance.post(`/api/supplements/search/list/${pageNum}`)

const supplementAPI = {
  fetchBatchData,
  fetchData,
  searchData,
}
export default supplementAPI
