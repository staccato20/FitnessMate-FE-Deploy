import { useQuery } from "@tanstack/react-query"

import bodyPartAPI from "@apis/domain/bodypart"

export const useGetBodyPart = (type = "search") => {
  const getBodyPart = useQuery({
    queryKey: ["getBodyPart"],
    queryFn: async () => await bodyPartAPI.fetchData(),
    select: (data) =>
      type === "search"
        ? [
            { englishName: "total", koreanName: "전체", imgPath: "" },
            ...data.bodyPartKoreanName.filter(
              (item) => item.englishName !== "all",
            ),
          ]
        : [...data.bodyPartKoreanName],
  })

  return { bodyParts: getBodyPart.data }
}
