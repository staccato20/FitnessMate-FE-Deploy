import { useQuery } from "@tanstack/react-query"

import bodyDataAPI from "@apis/domain/bodydata"

import { GetBodyDataResponse } from "../../types/type"

export const useGetFetchRecentData = () => {
  const { data: getbodyData } = useQuery<GetBodyDataResponse>({
    queryKey: ["useGetFetchRecentData"],
    queryFn: async () => {
      const response = await bodyDataAPI.fetchRecentData()
      return response.data
    },
  })

  if (getbodyData) {
    // 골격근량과 체지방량 기준 체형 분류
    let bodyFigure = ""
    if (getbodyData.bodyFat <= 15) {
      if (getbodyData.muscleMass <= 30) {
        bodyFigure = "마름"
      } else {
        bodyFigure = "근육질"
      }
    } else if (getbodyData.bodyFat <= 18) {
      bodyFigure = "보통"
    } else if (getbodyData.bodyFat <= 20) {
      bodyFigure = "통통"
    } else {
      bodyFigure = "뚱뚱"
    }

    let myBodyData = {
      height: getbodyData.height,
      bodyFigure: bodyFigure,
    }

    return { bodyDatas: myBodyData }
  }
  return { bodyDatas: null } // 데이터가 없을 경우 null 반환
}
