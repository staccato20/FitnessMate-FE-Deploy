import { useQuery } from "@tanstack/react-query"

import bodyPartAPI from "@apis/domain/bodypart"

export const useGetBodyPart = () => {
  const getBodyPart = useQuery({
    queryKey: ["getBodyPart"],
    queryFn: async () => await bodyPartAPI.fetchData(),
    select: (data) => [
      { englishName: "total", koreanName: "전체" },
      ...data.bodyPartKoreanName.filter((item) => item.englishName !== "all"),
    ],
  })

  return { bodyParts: getBodyPart.data }
}
