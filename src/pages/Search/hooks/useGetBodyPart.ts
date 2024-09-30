import { useQuery } from "@tanstack/react-query"

import bodyPartAPI from "@apis/domain/bodypart"

export const useGetBodyPart = () => {
  return useQuery({
    queryKey: ["getBodyPart"],
    queryFn: async () => await bodyPartAPI.fetchData(),
  }).data?.bodyPartKoreanName
}
